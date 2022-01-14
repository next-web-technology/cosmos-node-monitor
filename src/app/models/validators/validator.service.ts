import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidatorInfrastructureService } from './validator.infrastructure.service';
import { Validator } from './validator.model';

export interface InterfaceValidatorService {
  getAllValidators$: () => Observable<Validator[]>;
}

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor(
    private validatorInfrastructureService: ValidatorInfrastructureService
  ) {}

  getAllValidators$(): Observable<Validator[]> {
    return this.validatorInfrastructureService.getAllValidators$();
  }
}
