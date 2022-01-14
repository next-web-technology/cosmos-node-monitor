import { render, screen } from '@testing-library/angular';
import { Observable, of } from 'rxjs';
import { VALIDATORS_MOCK } from 'src/app/models/validators/validator.mock';
import { Validator } from 'src/app/models/validators/validator.model';
import { ValidatorService } from 'src/app/models/validators/validator.service';
import { ValidatorNodesComponent } from './validator-nodes.component';

describe('ValidatorNodesComponent', () => {
  beforeEach(async () => {
    await render(ValidatorNodesComponent, {
      providers: [
        {
          provide: ValidatorService,
          useValue: {
            getAllValidators$: (): Observable<Validator[]> =>
              of(VALIDATORS_MOCK),
          },
        },
      ],
    });
  });

  // Note: This is dummy test. This can be removed.
  it('should render nothing', () => {
    expect(true).toBeTruthy();
  });
});
