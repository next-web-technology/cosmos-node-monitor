import {
  InlineResponse20035,
  InlineResponse20037,
  InlineResponse20038,
} from "@cosmos-client/core/esm/openapi";
import { Job } from "../firestore/jobs/job.model";
import {
  Node,
  NodeInfo,
  NodeLatestBlock,
  NodeSyncStatus,
} from "../firestore/nodes/node.model";

export const convertNodeToInitialJob = (node: Node): Job => {
  const job: Job = {
    completed: false,
    domain: node.domain,
  };
  return job;
};

export const convertDomainToRestApiUrl = (
  domain: string,
  protocol: string
): string => {
  if (protocol === "http") {
    return `${protocol}://${domain}:1317`;
  } else if (protocol === "https") {
    return `${protocol}://${domain}:1318`;
  } else {
    throw Error("Invalid protocol!");
  }
};

export const convertCosmosNodeLatestBlockToNodeLatestBlock = (
  cosmosNodeLatestBlock: InlineResponse20035 | undefined
): NodeLatestBlock => {
  if (cosmosNodeLatestBlock === undefined) {
    return {
      latestBlockHash: "",
      latestBlockHeight: "",
    };
  }
  /* eslint-disable camelcase */
  const latestBlockHash = cosmosNodeLatestBlock.block?.header?.data_hash
    ? cosmosNodeLatestBlock.block?.header?.data_hash
    : "";
  const latestBlockHeight = cosmosNodeLatestBlock.block?.header?.height
    ? cosmosNodeLatestBlock.block?.header?.height
    : "";
  /* eslint-enable camelcase */
  return {
    latestBlockHash,
    latestBlockHeight,
  };
};

export const convertCosmosNodeInfoToNodeInfo = (
  cosmosNodeInfo: InlineResponse20037 | undefined
): NodeInfo => {
  if (cosmosNodeInfo === undefined) {
    return {
      chainId: "",
      cosmosSdkVersion: "",
      moniker: "",
      version: "",
    };
  }
  /* eslint-disable camelcase */
  const chainId = cosmosNodeInfo.default_node_info?.network
    ? cosmosNodeInfo.default_node_info?.network
    : "";
  const cosmosSdkVersion = cosmosNodeInfo.application_version
    ?.cosmos_sdk_version
    ? cosmosNodeInfo.application_version?.cosmos_sdk_version
    : "";
  const moniker = cosmosNodeInfo.default_node_info?.moniker
    ? cosmosNodeInfo.default_node_info?.moniker
    : "";
  const version = cosmosNodeInfo.application_version?.version
    ? cosmosNodeInfo.application_version?.version
    : "";
  /* eslint-enable camelcase */
  return {
    chainId,
    cosmosSdkVersion,
    moniker,
    version,
  };
};

export const convertCosmosNodeSyncStatusToNodeSyncStatus = (
  cosmosNodeSyncStatus: InlineResponse20038 | undefined
): NodeSyncStatus => {
  if (cosmosNodeSyncStatus === undefined) {
    return {
      syncStatus: false,
    };
  }
  const syncStatus = cosmosNodeSyncStatus.syncing ? false : true;
  return {
    syncStatus,
  };
};
