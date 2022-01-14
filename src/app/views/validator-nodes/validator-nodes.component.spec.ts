import { render, screen } from '@testing-library/angular';
import { VALIDATORS_MOCK } from 'src/app/models/validators/validator.mock';
import { ViewValidatorNodesComponent } from './validator-nodes.component';

describe('ViewValidatorNodesComponent', () => {
  beforeEach(async () => {
    await render(ViewValidatorNodesComponent, {
      componentProperties: { validators: VALIDATORS_MOCK },
    });
  });

  it('should render Validator Node List', () => {
    expect(screen.getByText('Validator Node List')).toBeTruthy();
  });

  it('should render Commission', () => {
    expect(screen.getByText('Commission')).toBeTruthy();
  });

  it('should render Bonding', () => {
    expect(screen.getByText('Bonding')).toBeTruthy();
  });

  it('should render Moniker', () => {
    expect(screen.getByText('Moniker')).toBeTruthy();
  });

  it('should render Rate', () => {
    expect(screen.getByText('Rate')).toBeTruthy();
  });

  it('should render Max Rate', () => {
    expect(screen.getByText('Max Rate')).toBeTruthy();
  });

  it('should render Max Change Rate', () => {
    expect(screen.getByText('Max Change Rate')).toBeTruthy();
  });

  it('should render Update Time', () => {
    expect(screen.getByText('Update Time')).toBeTruthy();
  });

  it('should render Status', () => {
    expect(screen.getByText('Status')).toBeTruthy();
  });

  it('should render Height', () => {
    expect(screen.getByText('Height')).toBeTruthy();
  });

  it('should render Time', () => {
    expect(screen.getByText('Time')).toBeTruthy();
  });

  it('should render VALIDATORS_MOCK moniker', () => {
    VALIDATORS_MOCK.forEach((validator) => {
      expect(screen.getByText(validator.moniker)).toBeTruthy();
    });
  });

  // Todo: Implement more test
});
