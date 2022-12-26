import { I_World, W_DEFAULT, I_Biome, I_WConfiguration } from '@interface/World_def';
import FastNoiseLite from 'fastnoise-lite';


// CLASS DEFINITION FOR WORLD
export class MWorld implements I_World{
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

    // noise map to create World
    heightMap: FastNoiseLite;
    caveMap: FastNoiseLite;
    temperatureMap: FastNoiseLite;
    humidityMap: FastNoiseLite;

    constructor(def: I_WConfiguration) {
        this.name = def.world_def.name;
        this.SEED = def.world_def.SEED;
        this.depth = def.world_def.depth;
        this.temperature_gradient = def.world_def.temperature_gradient;
        this.humidity_gradient = def.world_def.humidity_gradient;
        this.sealevel = def.world_def.sealevel;
        this.hmax = def.world_def.hmax;
        
    }

    initialize() {
        // TODO: find proper pnrg (pseudo random number generator) to generate the various seeds.
        // TODO: allow for various onfiguration on the noise from W_DEF (use of low code or castorGUI... or...)
        console.log("Initialize World");

        // creation of perlin noise
        this.heightMap = new FastNoiseLite(this.SEED);
        this.heightMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.heightMap.SetSeed(this.SEED);
        this.heightMap.SetFractalOctaves(2);

        this.caveMap = new FastNoiseLite();
        this.caveMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.caveMap.SetSeed(this.SEED + 2);

        this.temperatureMap = new FastNoiseLite();
        this.temperatureMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.temperatureMap.SetSeed(this.SEED + 5);

        this.humidityMap = new FastNoiseLite();
        this.humidityMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.humidityMap.SetSeed(this.SEED + 5);
    }

    tickWorldAround(x: number , y:number){
        console.log("tick world around X: ",x, ", Y: ",y);
    }

    disposeWorld(){
        console.log("Dispose World");
    }
}