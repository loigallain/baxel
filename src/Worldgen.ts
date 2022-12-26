import FastNoiseLite from 'fastnoise-lite';
import { W_DEF } from './world_def';


const SEED = 143243525;
// creation of perlin noise
var heightMap = new FastNoiseLite(W_DEF.SEED);
//heightMap.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
heightMap.SetSeed(W_DEF.SEED);
heightMap.SetFractalOctaves(2);

var cave = new FastNoiseLite();
cave.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
cave.SetSeed(W_DEF.SEED+2);

var temperature = new FastNoiseLite();
temperature.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
temperature.SetSeed(W_DEF.SEED + 5);

var humidity = new FastNoiseLite();
humidity.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
humidity.SetSeed(W_DEF.SEED + 5);
