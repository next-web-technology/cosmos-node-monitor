import { Component, Input } from '@angular/core';
import { Node } from 'src/app/models/nodes/node.model';

@Component({
  selector: 'app-view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class ViewHomeComponent {
  @Input() nodes?: Node[] | null;

  constructor() {}
}
