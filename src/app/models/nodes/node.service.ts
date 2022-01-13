import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeInfrastructureService } from './node.infrastructure.service';
import { Node } from './node.model';

export interface InterfaceNodeService {
  getAllNodes$: () => Observable<Node[]>;
}

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor(private nodeInfrastructureService: NodeInfrastructureService) {}

  getAllNodes$(): Observable<Node[]> {
    return this.nodeInfrastructureService.getAllNodes$();
  }
}
