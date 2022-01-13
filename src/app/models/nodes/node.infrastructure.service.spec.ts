import { TestBed } from '@angular/core/testing';

import { NodeInfrastructureService } from './node.infrastructure.service';

describe('NodeInfrastructureService', () => {
  let service: NodeInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
