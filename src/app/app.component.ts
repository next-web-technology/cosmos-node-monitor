import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CHAINS } from './models/chains/chain';
import { environment } from 'src/environments/environment';
import { MENUS } from './models/menus/menu';
import { DEVELOPER_LINKS } from './models/links/links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hamburgerMenuIcon = faBars;

  chains = CHAINS;
  menus = MENUS;

  name = environment.name;
  networkType = environment.networkType;
  matchChain = CHAINS.find(
    (chain) =>
      chain.name === this.name && chain.networkType === this.networkType
  );

  developerInfo = {
    name: 'Developer Info',
    links: DEVELOPER_LINKS,
  };
}
