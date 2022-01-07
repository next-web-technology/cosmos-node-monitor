import { Chain } from './chain.model';

export const CHAINS: Chain[] = [
  {
    name: 'UnUniFi',
    networkType: 'Testnet',
    chainId: 'ununifi-6-test',
    logo: 'ununifi.png',
    officialWebsiteLink: 'https://ununifi.io',
    githubLink: 'https://github.com/UnUniFi',
    twitterLink: 'https://twitter.com/ununifi',
    nodeMonitorLink: 'https://ununifi-node-monitor-test.web.app',
    blockExplorerLink: 'http://a.test.ununifi.cauchye.net',
  },
  {
    name: 'UnUniFi',
    networkType: 'Mainnet',
    chainId: undefined,
    logo: 'ununifi.png',
    officialWebsiteLink: 'https://ununifi.io',
    githubLink: 'https://github.com/UnUniFi',
    twitterLink: 'https://twitter.com/ununifi',
    nodeMonitorLink: undefined,
    blockExplorerLink: undefined,
  },
];
