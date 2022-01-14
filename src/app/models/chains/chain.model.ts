import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type Chain = {
  name: string;
  networkType: 'Mainnet' | 'Testnet';
  chainId: string | undefined;
  logo: string;
  officialWebsiteLink: string;
  officialWebsiteIcon: IconDefinition;
  githubLink: string;
  githubIcon: IconDefinition;
  twitterLink: string;
  twitterIcon: IconDefinition;
  nodeMonitorLink: string | undefined;
  blockExplorerLink: string | undefined;
};
