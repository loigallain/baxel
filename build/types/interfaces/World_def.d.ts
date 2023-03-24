export interface I_Biome {
    name: string;
}
export interface I_World {
    definition: I_WConfiguration;
    initialize: () => void;
}
export interface I_WConfiguration {
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
}
export declare const DEFAULT_W_CONF: {
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
    biomes: any[];
};
declare const DEFAULT: I_World;
export { DEFAULT as W_DEFAULT };
