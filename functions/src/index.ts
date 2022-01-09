import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin";
import {
  getCosmosNodeInfo,
  getCosmosNodeLatestBlock,
  getCosmosNodeSyncStatus,
} from "./cosmos/cosmos.service";
import { getNodes, setNode } from "./firestore/nodes/node.service";
import { deleteJob, setJob } from "./firestore/jobs/job.service";
import { Node } from "./firestore/nodes/node.model";
import {
  convertCosmosNodeInfoToNodeInfo,
  convertCosmosNodeLatestBlockToNodeLatestBlock,
  convertCosmosNodeSyncStatusToNodeSyncStatus,
  convertDomainToRestApiUrl,
  convertNodeToInitialJob,
} from "./utils/converter";

initializeApp();

export const triggerJobsExecutedPeriodicallyEveryMinute = functions
  .runWith({
    timeoutSeconds: 60,
    memory: "128MB",
  })
  .region("asia-northeast1")
  .pubsub.schedule("*/5 * * * *")
  .onRun(async () => {
    try {
      const nodes = await getNodes();
      functions.logger.debug(nodes);
      await Promise.all(
        nodes.map(async (node) => {
          try {
            return await deleteJob(node.domain);
          } catch (error) {
            return;
          }
        })
      );
      await Promise.all(
        nodes.map(async (node) => {
          const job = convertNodeToInitialJob(node);
          try {
            return await setJob(job);
          } catch (error) {
            return;
          }
        })
      );
      functions.logger.info(nodes);
    } catch (error) {
      functions.logger.error(error);
    }
  });

export const onCreateJob = functions
  .runWith({
    timeoutSeconds: 60,
    memory: "128MB",
  })
  .region("asia-northeast1")
  .firestore.document("jobs/{domain}")
  .onCreate(async (change, context) => {
    const domain: string = context.params.domain;
    functions.logger.debug(domain);
    const chainId: string = functions.config().cosmos.chain_id;
    const restApiHttp = convertDomainToRestApiUrl(domain, "http");
    const restApiHttps = convertDomainToRestApiUrl(domain, "https");
    const cosmosNodeInfo = await getCosmosNodeInfo(domain, "http", chainId);
    const nodeInfo = convertCosmosNodeInfoToNodeInfo(cosmosNodeInfo);
    const cosmosNodeLatestBlock = await getCosmosNodeLatestBlock(
      domain,
      "http",
      chainId
    );
    const nodeLatestBlock = convertCosmosNodeLatestBlockToNodeLatestBlock(
      cosmosNodeLatestBlock
    );
    const cosmosNodeSyncStatus = await getCosmosNodeSyncStatus(
      domain,
      "http",
      chainId
    );
    const nodeSyncStatus =
      convertCosmosNodeSyncStatusToNodeSyncStatus(cosmosNodeSyncStatus);
    const httpsCosmosNodeSyncStatus = await getCosmosNodeSyncStatus(
      domain,
      "https",
      chainId
    );
    const restApiHttpEnabled =
      cosmosNodeSyncStatus === undefined ? false : true;
    const restApiHttpsEnabled =
      httpsCosmosNodeSyncStatus === undefined ? false : true;
    const jobCompleted = true;
    const node: Node = {
      domain,
      jobCompleted,
      restApiHttp,
      restApiHttpEnabled,
      restApiHttps,
      restApiHttpsEnabled,
      ...nodeInfo,
      ...nodeLatestBlock,
      ...nodeSyncStatus,
    };
    await setNode(node);
    await deleteJob(domain);
    functions.logger.info(domain);
  });
