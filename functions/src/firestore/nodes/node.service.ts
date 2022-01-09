import { firestore } from "firebase-admin";
import { Node } from "./node.model";

export const getNodes = async (): Promise<Node[]> => {
  const db = firestore();
  const nodeRef = db.collection("nodes");
  const nodesSnapshot = await nodeRef.get();
  const nodes: Node[] = [];
  nodesSnapshot.forEach((nodeSnapshot) =>
    nodes.push(nodeSnapshot.data() as Node)
  );
  return nodes;
};

export const getNode = async (domain: string): Promise<Node> => {
  const db = firestore();
  const nodesRef = db.collection("nodes");
  const nodeDoc = await nodesRef.doc(domain).get();
  if (!nodeDoc.exists) {
    throw Error("Not Found");
  } else {
    const node: Node = nodeDoc.data() as Node;
    return node;
  }
};

export const setNode = async (node: Node): Promise<void> => {
  const db = firestore();
  const nodesRef = db.collection("nodes");
  if (node.domain) {
    await nodesRef.doc(node.domain).set(node);
  }
};
