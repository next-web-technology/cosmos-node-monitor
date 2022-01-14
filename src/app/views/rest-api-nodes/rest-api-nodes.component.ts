import { Component, Input } from '@angular/core';
import { Node } from 'src/app/models/nodes/node.model';

@Component({
  selector: 'app-view-rest-api-nodes',
  templateUrl: './rest-api-nodes.component.html',
  styleUrls: ['./rest-api-nodes.component.css'],
})
export class ViewRestApiNodesComponent {
  @Input() nodes?: Node[] | null;

  constructor() {}
}
