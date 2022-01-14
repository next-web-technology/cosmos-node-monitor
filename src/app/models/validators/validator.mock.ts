import { Validator } from './validator.model';

export const VALIDATOR_MOCK: Validator = {
  moniker: 'cauchye-a-test',
  identity: 'cauchye-a-test',
  website: 'https://cauchye.com',
  status: 'BOND_STATUS_UNBONDING',
  unbondingHeight: '105895',
  unbondingTime: '2022-01-19T00:47:20.990552739Z',
  commissionRate: '0.100000000000000000',
  commissionMaxRate: '0.200000000000000000',
  commissionMaxChangeRate: '0.010000000000000000',
  commissionUpdateTime: '2021-12-22T00:45:40.423400095Z',
};

export const VALIDATORS_MOCK: Validator[] = [
  {
    moniker: 'cauchye-a-test',
    identity: 'cauchye-a-test',
    website: 'https://cauchye.com',
    status: 'BOND_STATUS_UNBONDING',
    unbondingHeight: '105895',
    unbondingTime: '2022-01-19T00:47:20.990552739Z',
    commissionRate: '0.100000000000000000',
    commissionMaxRate: '0.200000000000000000',
    commissionMaxChangeRate: '0.010000000000000000',
    commissionUpdateTime: '2021-12-22T00:45:40.423400095Z',
  },
  {
    moniker: 'cauchye-b-test',
    identity: 'cauchye-b-test',
    website: 'https://cauchye.com',
    status: 'BOND_STATUS_UNBONDING',
    unbondingHeight: '178744',
    unbondingTime: '2022-01-23T13:06:24.001745182Z',
    commissionRate: '0.100000000000000000',
    commissionMaxRate: '0.200000000000000000',
    commissionMaxChangeRate: '0.010000000000000000',
    commissionUpdateTime: '2021-12-22T00:45:40.423400095Z',
  },
  {
    moniker: 'tokyo-0-test',
    identity: 'tokyo-0-test',
    website: '',
    status: 'BOND_STATUS_BONDED',
    unbondingHeight: '0',
    unbondingTime: '1970-01-01T00:00:00Z',
    commissionRate: '0.100000000000000000',
    commissionMaxRate: '0.200000000000000000',
    commissionMaxChangeRate: '0.010000000000000000',
    commissionUpdateTime: '2021-12-22T00:45:40.423400095Z',
  },
];
