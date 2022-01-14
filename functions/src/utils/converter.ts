import {
  InlineResponse20035,
  InlineResponse20037,
  InlineResponse20038,
  InlineResponse20066Validators,
} from "@cosmos-client/core/esm/openapi";
import { Job } from "../firestore/jobs/job.model";
import {
  Node,
  NodeInfo,
  NodeLatestBlock,
  NodeSyncStatus,
} from "../firestore/nodes/node.model";
import { Validator } from "../firestore/validators/validator.model";

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

export const convertCosmosStakingValidatorsToValidators = (
  cosmosStakingValidators: InlineResponse20066Validators[] | undefined
): Validator[] => {
  if (cosmosStakingValidators === undefined) {
    return [];
  }
  const validators: Validator[] = cosmosStakingValidators.map(
    (cosmosStakingValidator) => {
      /* eslint-disable camelcase */
      const moniker = cosmosStakingValidator.description?.moniker
        ? cosmosStakingValidator.description?.moniker
        : "";
      const identity = cosmosStakingValidator.description?.identity
        ? cosmosStakingValidator.description?.identity
        : "";
      const website = cosmosStakingValidator.description?.website
        ? cosmosStakingValidator.description?.website
        : "";
      const status = cosmosStakingValidator.status
        ? cosmosStakingValidator.status
        : "";
      const unbondingHeight = cosmosStakingValidator.unbonding_height
        ? cosmosStakingValidator.unbonding_height
        : "";
      const unbondingTime = cosmosStakingValidator.unbonding_time
        ? cosmosStakingValidator.unbonding_time
        : "";
      const commissionRate =
        cosmosStakingValidator.commission?.commission_rates?.rate?.toString()
          ? cosmosStakingValidator.commission?.commission_rates?.rate?.toString()
          : "";
      const commissionMaxRate =
        cosmosStakingValidator.commission?.commission_rates?.max_rate?.toString()
          ? cosmosStakingValidator.commission?.commission_rates?.max_rate?.toString()
          : "";
      const commissionMaxChangeRate =
        cosmosStakingValidator.commission?.commission_rates?.max_change_rate?.toString()
          ? cosmosStakingValidator.commission?.commission_rates?.max_change_rate?.toString()
          : "";
      const commissionUpdateTime = cosmosStakingValidator.commission
        ?.update_time
        ? cosmosStakingValidator.commission?.update_time
        : "";
      /* eslint-enable camelcase */
      return {
        moniker,
        identity,
        website,
        status,
        unbondingHeight,
        unbondingTime,
        commissionRate,
        commissionMaxRate,
        commissionMaxChangeRate,
        commissionUpdateTime,
      };
    }
  );
  return validators;
};
