export interface I_Biome {
    name: string;
}

export interface I_World {
hmax:number;
SEED: number;
VIZ : number;
depth : number;
sealevel : number;
cave : number;
name: string;
debug: boolean;
temperature_gradient: number;
humidity_gradient: number;
biomes: I_Biome[];


// behavior
initialize: () => void;
}

export interface I_WConfiguration {
    world_def: I_World;
}



const DEFAULT : I_World = {
    hmax    :       100,
    SEED    :       455586,
    VIZ     :        1, //1 for voxel, 2 for marching cube, 3 for
    depth   :       -10,
    sealevel:       30, // below is sea or ground
    cave    :       50, // threshold for cave expressed in %
    name    :       "default",
    debug   :      true,
    temperature_gradient: 10, // variation of temperature with altitude
    humidity_gradient:  10, //variation of humidity with altitude
    biomes  :       [],   
    
    // behavior
    initialize(): void{
        console.log("Default World ",this);
    }
};
export {DEFAULT as W_DEFAULT};

