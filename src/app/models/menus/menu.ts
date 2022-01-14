import { faCheckCircle, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { Menu } from './menu.model';

export const MENUS: Menu[] = [
  {
    name: 'Validator Node List',
    path: '/validator-nodes',
    icon: faCheckCircle,
  },
  {
    name: 'REST API Node List',
    path: '/rest-api-nodes',
    icon: faDiceD20,
  },
];
