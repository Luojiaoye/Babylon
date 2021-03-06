import { Signal1 } from '../signals/Signal1';
import { Node } from './Node';
export declare class NodeList<TNode extends Node<TNode>> {
    head: TNode | null;
    tail: TNode | null;
    nodeAdded: Signal1<TNode>;
    nodeRemoved: Signal1<TNode>;
    constructor();
    add(node: TNode): void;
    remove(node: TNode): void;
    removeAll(): void;
    readonly empty: boolean;
    swap(node1: TNode, node2: TNode): void;
    insertionSort(sortFunction: (node1: Node<any>, node2: Node<any>) => number): void;
    mergeSort(sortFunction: (a: TNode, b: TNode) => number): void;
    private merge;
}
