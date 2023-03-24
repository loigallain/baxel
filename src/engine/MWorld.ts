import { I_World, I_WConfiguration } from '@interfaces/World_def';
import FastNoiseLite from 'fastnoise-lite';


// CLASS DEFINITION FOR WORLD
export class MWorld implements I_World{
    definition: I_WConfiguration;

    // noise map to create World
    heightMap: FastNoiseLite;
    caveMap: FastNoiseLite;
    temperatureMap: FastNoiseLite;
    humidityMap: FastNoiseLite;

    constructor(def: I_WConfiguration) {
        this.definition = def;
        
    }

    initialize() {
        // TODO: find proper pnrg (pseudo random number generator) to generate the various seeds.
        // TODO: allow for various onfiguration on the noise from W_DEF (use of low code or castorGUI... or...)
        console.log("Initialize World");

        // creation of perlin noise
        this.heightMap = new FastNoiseLite(this.definition.SEED);
        this.heightMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.heightMap.SetSeed(this.definition.SEED);
        this.heightMap.SetFractalOctaves(2);

        this.caveMap = new FastNoiseLite();
        this.caveMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.caveMap.SetSeed(this.definition.SEED + 2);

        this.temperatureMap = new FastNoiseLite();
        this.temperatureMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.temperatureMap.SetSeed(this.definition.SEED + 5);

        this.humidityMap = new FastNoiseLite();
        this.humidityMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
        this.humidityMap.SetSeed(this.definition.SEED + 5);
    }

    tickWorldAround(x: number , y:number){
        console.log("tick world around X: ",x, ", Y: ",y);
    }

    disposeWorld(){
        console.log("Dispose World");
    }
}