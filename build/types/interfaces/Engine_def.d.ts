import { Scene } from "babylonjs";
import * as WORLD_DEF from '@interfaces/World_def';
export interface I_Engine {
    scene: Scene;
    world: WORLD_DEF.I_World;
    canvas: HTMLCanvasElement;
    description: string;
    debug: boolean;
    initialize: () => Scene;
    startRenderLoop: () => void;
    resize: () => void;
}
export interface I_EConfiguration {
    name: string;
    type: string;
}
export declare enum TYPE {
    VOXEL = "VOXEL",
    MESH = "MESH",
    PLANET = "PLANET"
}
