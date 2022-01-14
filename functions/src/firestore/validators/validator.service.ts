import { firestore } from "firebase-admin";
import { Validator } from "./validator.model";

export const getValidators = async (): Promise<Validator[]> => {
  const db = firestore();
  const validatorsRef = db.collection("validators");
  const validatorsSnapshot = await validatorsRef.get();
  const validators: Validator[] = [];
  validatorsSnapshot.forEach((validatorSnapshot) =>
    validators.push(validatorSnapshot.data() as Validator)
  );
  return validators;
};

export const getValidator = async (moniker: string): Promise<Validator> => {
  const db = firestore();
  const validatorsRef = db.collection("validators");
  const validatorDoc = await validatorsRef.doc(moniker).get();
  if (!validatorDoc.exists) {
    throw Error("Not Found");
  } else {
    const validator: Validator = validatorDoc.data() as Validator;
    return validator;
  }
};

export const setValidator = async (validator: Validator): Promise<void> => {
  const db = firestore();
  const validatorsRef = db.collection("validators");
  if (validator.moniker) {
    await validatorsRef.doc(validator.moniker).set(validator);
  }
};
