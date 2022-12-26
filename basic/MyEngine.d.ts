import * as BABYLON from "babylonjs";
import { Scene } from "babylonjs";
import * as WORLD from '@/interface/World_def';
import * as ENGINE_DEF from '../interface/Engine_def';
export declare class MyEngine implements ENGINE_DEF.I_Engine {
    scene: Scene;
    world: WORLD.I_World;
    engine: BABYLON.Engine;
    config: ENGINE_DEF.I_EConfiguration;
    canvas: HTMLCanvasElement;
    description: "this is a pure voxel based engine";
    debug: boolean;
    edgeColor: BABYLON.Color4;
    constructor(world: WORLD.I_World, config: ENGINE_DEF.I_EConfiguration, drawArea: HTMLCanvasElement);
    initialize(): Scene;
    addEventListener(): void;
    startRenderLoop(): void;
    resize(): void;
    addVector(a: number[], b: number[], l: number): number[];
    addVoxel(position?: number[]): void;
    addChunk(size: number, heigth: number, position?: number[]): void;
}
