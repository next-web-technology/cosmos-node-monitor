import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Node } from 'src/app/models/nodes/node.model';
import { NodeService } from 'src/app/models/nodes/node.service';

@Component({
  selector: 'app-rest-api-nodes',
  templateUrl: './rest-api-nodes.component.html',
  styleUrls: ['./rest-api-nodes.component.css'],
})
export class RestApiNodesComponent {
  nodes$: Observable<Node[]>;
  nodesSubscription?: Subscription;

  constructor(private nodeService: NodeService) {
    this.nodes$ = this.nodeService.getAllNodes$();
  }
}
