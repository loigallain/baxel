import { I_World, I_Biome, I_WConfiguration } from '@interfaces/World_def';
import FastNoiseLite from 'fastnoise-lite';
export declare class MWorld implements I_World {
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
    heightMap: FastNoiseLite;
    caveMap: FastNoiseLite;
    temperatureMap: FastNoiseLite;
    humidityMap: FastNoiseLite;
    constructor(def: I_WConfiguration);
    initialize(): void;
    tickWorldAround(x: number, y: number): void;
    disposeWorld(): void;
}
