export type Node = {
  chainId: string;
  cosmosSdkVersion: string;
  domain: string;
  jobCompleted: boolean;
  latestBlockHash: string;
  latestBlockHeight: string;
  moniker: string;
  restApiHttp: string;
  restApiHttpEnabled: boolean;
  restApiHttps: string;
  restApiHttpsEnabled: boolean;
  syncStatus: boolean;
  version: string;
};

export type NodeInfo = {
  chainId: string;
  cosmosSdkVersion: string;
  moniker: string;
  version: string;
};

export type NodeSyncStatus = {
  syncStatus: boolean;
};

export type NodeLatestBlock = {
  latestBlockHash: string;
  latestBlockHeight: string;
};
