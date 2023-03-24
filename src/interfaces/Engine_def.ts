 import { Scene } from "babylonjs";
import * as WORLD_DEF from '@interfaces/World_def';


export interface I_Engine {
    scene:      Scene;
    world:      WORLD_DEF.I_World;
    canvas:     HTMLCanvasElement;
    description: string;
    debug:      boolean;
    // behavior
    // initialize creation of Babylon Scene
    initialize: () => Scene;
    startRenderLoop:() => void;
    //for resizing engine
    resize: () => void;
}

export interface I_EConfiguration {
    name: string;
    type: string;
}

export enum TYPE {
    VOXEL   = "VOXEL",
    MESH    = "MESH",
    PLANET  = "PLANET"
}