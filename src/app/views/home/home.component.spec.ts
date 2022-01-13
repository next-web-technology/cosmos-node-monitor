import { render, screen } from '@testing-library/angular';
import { NODES_MOCK } from 'src/app/models/nodes/node.mock';
import { ViewHomeComponent } from './home.component';

describe('ViewHomeComponent', () => {
  beforeEach(async () => {
    await render(ViewHomeComponent, {
      componentProperties: { nodes: NODES_MOCK },
    });
  });

  it('should render REST API Node List', () => {
    expect(screen.getByText('REST API Node List')).toBeTruthy();
  });

  it('should render Domain', () => {
    expect(screen.getByText('Domain')).toBeTruthy();
  });

  it('should render Chain ID', () => {
    expect(screen.getByText('Chain ID')).toBeTruthy();
  });

  it('should render Http', () => {
    expect(screen.getByText('Http')).toBeTruthy();
  });

  it('should render Sync', () => {
    expect(screen.getByText('Sync')).toBeTruthy();
  });

  it('should render Block', () => {
    expect(screen.getByText('Block')).toBeTruthy();
  });

  it('should render Node', () => {
    expect(screen.getByText('Node')).toBeTruthy();
  });

  it('should render NODES_MOCK domain', () => {
    NODES_MOCK.forEach((node) => {
      expect(screen.getByText(node.domain)).toBeTruthy();
    });
  });

  it('should render NODES_MOCK chainId', () => {
    NODES_MOCK.forEach((node) => {
      const sameChainIdNodesLength = NODES_MOCK.filter(
        (nodeMock) => nodeMock.chainId === node.chainId
      ).length;
      expect(screen.getAllByText(node.chainId).length).toBeTruthy(
        sameChainIdNodesLength
      );
    });
  });

  it('should render NODES_MOCK Http Enabled or Disabled', () => {
    // Todo: Implement
    expect(true).toBeTruthy();
  });

  it('should render NODES_MOCK Sync Status', () => {
    // Todo: Implement
    expect(true).toBeTruthy();
  });

  it('should render NODES_MOCK Block Height', () => {
    // Todo: Implement
    expect(true).toBeTruthy();
  });

  it('should render NODES_MOCK Block Latest', () => {
    // Todo: Implement
    expect(true).toBeTruthy();
  });

  it('should render NODES_MOCK Node Info', () => {
    // Todo: Implement
    expect(true).toBeTruthy();
  });
});
