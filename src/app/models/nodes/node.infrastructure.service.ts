import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  getDocs,
  onSnapshot,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Node } from './node.model';
import { InterfaceNodeService } from './node.service';

@Injectable({
  providedIn: 'root',
})
export class NodeInfrastructureService implements InterfaceNodeService {
  db: Firestore;
  nodes$: BehaviorSubject<Node[]>;

  constructor(firestore: Firestore) {
    this.db = firestore;
    this.nodes$ = new BehaviorSubject([] as Node[]);
  }

  // // 1 time only
  // async getAllNodes(): Promise<Node[]> {
  //   const nodesCollectionRef = collection(this.db, 'nodes');
  //   const nodesSnapshot = await getDocs(nodesCollectionRef);
  //   const nodes: Node[] = [];
  //   nodesSnapshot.forEach((doc) => {
  //     const unknownNode = doc.data() as unknown;
  //     const node = unknownNode as Node;
  //     nodes.push(node);
  //   });
  //   return nodes;
  // }

  getAllNodes$(): Observable<Node[]> {
    const nodesCollectionRef = collection(this.db, 'nodes');
    const unsubscribe = onSnapshot(nodesCollectionRef, (nodesSnapshot) => {
      const nodes: Node[] = [];
      nodesSnapshot.forEach((doc) => {
        const unknownNode = doc.data() as unknown;
        const node = unknownNode as Node;
        nodes.push(node);
      });
      this.nodes$.next(nodes);
    });
    return this.nodes$.asObservable();
  }
}
