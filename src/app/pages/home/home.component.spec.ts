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

  it('should render home works!', async () => {
    expect(screen.getByText('home works!')).toBeTruthy();
  });
});
