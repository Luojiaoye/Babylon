import { Signal0 } from '../signals/Signal0';
import { ClassType, NodeClassType } from '../types';
import { Entity } from './Entity';
import { IFamily } from './IFamily';
import { Node } from './Node';
import { NodeList } from './NodeList';
import { System } from './System';
export declare class Engine {
    private entityNames;
    private entityList;
    private systemList;
    private families;
    updating: boolean;
    updateComplete: Signal0;
    familyClass: ClassType<IFamily<any>>;
    constructor();
    addEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
    private entityNameChanged;
    getEntityByName(name: string): Entity | null;
    removeAllEntities(): void;
    readonly entities: Entity[];
    private componentAdded;
    private componentRemoved;
    getNodeList<TNode extends Node<any>>(nodeClass: NodeClassType<TNode>): NodeList<TNode>;
    releaseNodeList<TNode extends Node<TNode>>(nodeClass: NodeClassType<TNode>): void;
    addSystem(system: System, priority: number): void;
    getSystem<TSystem extends System>(type: ClassType<TSystem>): TSystem | null;
    readonly systems: System[];
    removeSystem(system: System): void;
    removeAllSystems(): void;
    update(time: number): void;
}
