import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Node } from 'src/app/models/nodes/node.model';
import { NodeService } from 'src/app/models/nodes/node.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  nodes$: Observable<Node[]>;
  nodesSubscription?: Subscription;

  constructor(private nodeService: NodeService) {
    this.nodes$ = this.nodeService.getAllNodes$();
  }

  ngOnInit() {
    this.nodesSubscription = this.nodes$.subscribe((nodes) =>
      console.log(nodes)
    );
  }

  ngOnDestroy() {
    this.nodesSubscription?.unsubscribe();
  }
}
