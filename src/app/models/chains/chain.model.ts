export type Chain = {
  name: string;
  networkType: 'Mainnet' | 'Testnet';
  chainId: string | undefined;
  logo: string;
  officialWebsiteLink: string;
  githubLink: string;
  twitterLink: string;
  nodeMonitorLink: string | undefined;
  blockExplorerLink: string | undefined;
};
