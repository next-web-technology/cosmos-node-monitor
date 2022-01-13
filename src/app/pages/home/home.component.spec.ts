import { render, screen } from '@testing-library/angular';
import { Observable, of } from 'rxjs';
import { Node } from 'src/app/models/nodes/node.model';
import { NODES_MOCK } from 'src/app/models/nodes/node.mock';
import { NodeService } from 'src/app/models/nodes/node.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await render(HomeComponent, {
      providers: [
        {
          provide: NodeService,
          useValue: {
            getAllNodes$: (): Observable<Node[]> => of(NODES_MOCK),
          },
        },
      ],
    });
  });

  // Note: This is dummy test. This can be removed.
  it('should render nothing', async () => {
    expect(true).toBeTruthy();
  });
});
