import { I_World, I_WConfiguration } from '@interfaces/World_def';
import FastNoiseLite from 'fastnoise-lite';
export declare class MWorld implements I_World {
    definition: I_WConfiguration;
    heightMap: FastNoiseLite;
    caveMap: FastNoiseLite;
    temperatureMap: FastNoiseLite;
    humidityMap: FastNoiseLite;
    constructor(def: I_WConfiguration);
    initialize(): void;
    tickWorldAround(x: number, y: number): void;
    disposeWorld(): void;
}
