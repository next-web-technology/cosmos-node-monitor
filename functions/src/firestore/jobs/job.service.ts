import { firestore } from "firebase-admin";
import { Job } from "./job.model";

export const getJob = async (domain: string): Promise<Job> => {
  const db = firestore();
  const jobsRef = db.collection("jobs");
  const jobDoc = await jobsRef.doc(domain).get();
  if (!jobDoc.exists) {
    throw Error("Not Found");
  } else {
    const job: Job = jobDoc.data() as Job;
    return job;
  }
};

export const setJob = async (job: Job): Promise<void> => {
  const db = firestore();
  const jobsRef = db.collection("jobs");
  await jobsRef.doc(job.domain).set(job, {
    merge: true,
  });
};

export const deleteJob = async (domain: string): Promise<void> => {
  const db = firestore();
  const jobsRef = db.collection("jobs");
  await jobsRef.doc(domain).delete();
};
