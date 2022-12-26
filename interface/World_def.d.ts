export interface I_Biome {
    name: string;
}
export interface I_World {
    hmax: number;
    SEED: number;
    VIZ: number;
    depth: number;
    sealevel: number;
    cave: number;
    name: string;
    debug: boolean;
    temperature_gradient: number;
    humidity_gradient: number;
    biomes: I_Biome[];
    initialize: () => void;
}
export interface I_WConfiguration {
    world_def: I_World;
}
declare const DEFAULT: I_World;
export { DEFAULT as W_DEFAULT };
