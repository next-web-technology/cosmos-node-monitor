import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from './link.model';

export const DEVELOPER_LINKS: Link[] = [
  {
    icon: faHome,
    name: 'Company',
    link: 'https://next-web-technology.net',
  },
  {
    icon: faTwitter,
    name: 'Twitter',
    link: 'https://twitter.com/NextWebTechLLC',
  },
  {
    icon: faGithub,
    name: 'GitHub',
    link: 'https://github.com/next-web-technology/cosmos-node-monitor',
  },
];
