import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Chain } from './chain.model';

export const CHAINS: Chain[] = [
  {
    name: 'UnUniFi',
    networkType: 'Testnet',
    chainId: 'ununifi-6-test',
    logo: 'ununifi.png',
    officialWebsiteLink: 'https://ununifi.io',
    officialWebsiteIcon: faHome,
    githubLink: 'https://github.com/UnUniFi',
    githubIcon: faGithub,
    twitterLink: 'https://twitter.com/ununifi',
    twitterIcon: faTwitter,
    nodeMonitorLink: 'https://ununifi-node-monitor-test.web.app',
    blockExplorerLink: 'http://a.test.ununifi.cauchye.net',
  },
  {
    name: 'UnUniFi',
    networkType: 'Mainnet',
    chainId: undefined,
    logo: 'ununifi.png',
    officialWebsiteLink: 'https://ununifi.io',
    officialWebsiteIcon: faHome,
    githubLink: 'https://github.com/UnUniFi',
    githubIcon: faGithub,
    twitterLink: 'https://twitter.com/ununifi',
    nodeMonitorLink: undefined,
    twitterIcon: faTwitter,
    blockExplorerLink: undefined,
  },
];
