import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Validator } from 'src/app/models/validators/validator.model';
import { ValidatorService } from 'src/app/models/validators/validator.service';

@Component({
  selector: 'app-validator-nodes',
  templateUrl: './validator-nodes.component.html',
  styleUrls: ['./validator-nodes.component.css'],
})
export class ValidatorNodesComponent {
  validators$: Observable<Validator[]>;

  constructor(private validatorService: ValidatorService) {
    this.validators$ = this.validatorService.getAllValidators$();
  }
}
