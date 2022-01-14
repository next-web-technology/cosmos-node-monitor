import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  getDocs,
  onSnapshot,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Validator } from './validator.model';
import { InterfaceValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root',
})
export class ValidatorInfrastructureService
  implements InterfaceValidatorService
{
  db: Firestore;
  validators$: BehaviorSubject<Validator[]>;

  constructor(firestore: Firestore) {
    this.db = firestore;
    this.validators$ = new BehaviorSubject([] as Validator[]);
  }

  // // 1 time only
  // async getAllValidators(): Promise<Validator[]> {
  //   const validatorsCollectionRef = collection(this.db, 'validators');
  //   const validatorsSnapshot = await getDocs(validatorsCollectionRef);
  //   const validators: Validator[] = [];
  //   validatorsSnapshot.forEach((doc) => {
  //     const unknownNode = doc.data() as unknown;
  //     const validator = unknownNode as Validator;
  //     validators.push(validator);
  //   });
  //   return validators;
  // }

  getAllValidators$(): Observable<Validator[]> {
    const validatorsCollectionRef = collection(this.db, 'validators');
    const unsubscribe = onSnapshot(
      validatorsCollectionRef,
      (validatorsSnapshot) => {
        const validators: Validator[] = [];
        validatorsSnapshot.forEach((doc) => {
          const unknownNode = doc.data() as unknown;
          const validator = unknownNode as Validator;
          validators.push(validator);
        });
        this.validators$.next(validators);
      }
    );
    return this.validators$.asObservable();
  }
}
