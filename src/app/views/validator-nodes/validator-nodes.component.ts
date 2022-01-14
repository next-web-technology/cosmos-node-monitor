import { Component, Input } from '@angular/core';
import { Validator } from 'src/app/models/validators/validator.model';

@Component({
  selector: 'app-view-validator-nodes',
  templateUrl: './validator-nodes.component.html',
  styleUrls: ['./validator-nodes.component.css'],
})
export class ViewValidatorNodesComponent {
  @Input() validators?: Validator[] | null;

  constructor() {}
}
