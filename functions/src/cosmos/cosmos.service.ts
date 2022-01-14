import * as functions from "firebase-functions";
import { cosmosclient, rest } from "@cosmos-client/core";
import {
  InlineResponse20035,
  InlineResponse20037,
  InlineResponse20038,
  InlineResponse20066Validators,
} from "@cosmos-client/core/esm/openapi";
import { convertDomainToRestApiUrl } from "../utils/converter";

export const getCosmosNodeInfo = async (
  domain: string,
  protocol: string,
  chainId: string
): Promise<InlineResponse20037 | undefined> => {
  const restApiUrl = convertDomainToRestApiUrl(domain, protocol);
  const sdk = new cosmosclient.CosmosSDK(restApiUrl, chainId);
  try {
    const result = await rest.tendermint.getNodeInfo(sdk);
    functions.logger.debug(result);
    if (result.status !== 200) {
      functions.logger.error("Invalid status code!");
      return undefined;
    }
    const nodeInfo = result.data;
    functions.logger.debug(nodeInfo);
    return nodeInfo;
  } catch (error) {
    functions.logger.error(error);
    return undefined;
  }
};

export const getCosmosNodeLatestBlock = async (
  domain: string,
  protocol: string,
  chainId: string
): Promise<InlineResponse20035 | undefined> => {
  const restApiUrl = convertDomainToRestApiUrl(domain, protocol);
  const sdk = new cosmosclient.CosmosSDK(restApiUrl, chainId);
  try {
    const result = await rest.tendermint.getLatestBlock(sdk);
    functions.logger.debug(result);
    if (result.status !== 200) {
      functions.logger.error("Invalid status code!");
      return undefined;
    }
    const latestBlock = result.data;
    functions.logger.debug(latestBlock);
    return latestBlock;
  } catch (error) {
    functions.logger.error(error);
    return undefined;
  }
};

export const getCosmosNodeSyncStatus = async (
  domain: string,
  protocol: string,
  chainId: string
): Promise<InlineResponse20038 | undefined> => {
  const restApiUrl = convertDomainToRestApiUrl(domain, protocol);
  const sdk = new cosmosclient.CosmosSDK(restApiUrl, chainId);
  try {
    const result = await rest.tendermint.getSyncing(sdk);
    functions.logger.debug(result);
    if (result.status !== 200) {
      functions.logger.error("Invalid status code!");
      return undefined;
    }
    const nodeSyncStatus = result.data;
    functions.logger.debug(nodeSyncStatus);
    return nodeSyncStatus;
  } catch (error) {
    functions.logger.debug(error);
    return undefined;
  }
};

export const getCosmosStakingValidators = async (
  domain: string,
  protocol: string,
  chainId: string
): Promise<InlineResponse20066Validators[] | undefined> => {
  const restApiUrl = convertDomainToRestApiUrl(domain, protocol);
  const sdk = new cosmosclient.CosmosSDK(restApiUrl, chainId);
  try {
    const result = await rest.staking.validators(sdk);
    functions.logger.debug(result);
    if (result.status !== 200) {
      functions.logger.error("Invalid status code!");
      return undefined;
    }
    const validators = result.data.validators;
    functions.logger.debug(validators);
    return validators;
  } catch (error) {
    functions.logger.error(error);
    return undefined;
  }
};
