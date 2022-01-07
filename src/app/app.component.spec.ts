import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { CHAINS } from './models/chains/chain';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent);
  });

  it('should render App Title Cosmos Node Monitor', async () => {
    expect(screen.getByText('Cosmos Node Monitor')).toBeTruthy();
  });

  it('should render footer title Chain Info', async () => {
    expect(screen.getByText('Chain Info')).toBeTruthy();
  });

  it('should render footer title Developer Info', async () => {
    expect(screen.getByText('Developer Info')).toBeTruthy();
  });

  it('should render Chain on footer', async () => {
    expect(screen.getByText('Chain')).toBeTruthy();
  });

  it('should render Company on footer', async () => {
    expect(screen.getByText('Company')).toBeTruthy();
  });

  it('should render 2 Twitter on footer', async () => {
    expect(screen.getAllByText('Twitter').length).toBe(2);
  });

  it('should render 2 GitHub on footer', async () => {
    expect(screen.getAllByText('GitHub').length).toBe(2);
  });

  it('should render navigation links on sidenav drawer and navbar horizontal menu', async () => {
    CHAINS.filter(
      (chain) =>
        chain.chainId && chain.blockExplorerLink && chain.nodeMonitorLink
    ).forEach((chain) => {
      const links = screen.getAllByText(`${chain.name} (${chain.networkType})`);
      expect(links.length).toBe(2);
      links.forEach((link) => {
        expect(link.getAttribute('href')).toBe(
          chain.nodeMonitorLink ? chain.nodeMonitorLink : ''
        );
      });
    });
  });
});
