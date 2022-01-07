import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { CHAINS } from './models/chains/chain';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hamburgerMenuIcon = faBars;
  websiteIcon = faHome;
  twitterIcon = faTwitter;
  githubIcon = faGithub;
  chains = CHAINS;

  name = environment.name;
  networkType = environment.networkType;
  matchChain = CHAINS.find(
    (chain) =>
      chain.name === this.name && chain.networkType === this.networkType
  );

  developerInfo = {
    name: 'Developer Info',
    links: [
      {
        icon: this.websiteIcon,
        name: 'Company',
        link: 'https://next-web-technology.net',
      },
      {
        icon: this.twitterIcon,
        name: 'Twitter',
        link: 'https://twitter.com/NextWebTechLLC',
      },
      {
        icon: this.githubIcon,
        name: 'GitHub',
        link: 'https://github.com/next-web-technology/cosmos-node-monitor',
      },
    ],
  };
}
