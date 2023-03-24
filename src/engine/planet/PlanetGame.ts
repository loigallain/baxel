
import * as WORLD_DEFINITION from '@interfaces/World_def';
import * as ENGINE_DEFINITION from "@interfaces/Engine_def";
import * as GAME_DEFINITION from "@interfaces/Game_def";


import {MWorld} from '../MWorld';
import {PlanetEngine} from './PlanetEngine';



export class PlanetGame implements GAME_DEFINITION.I_Game{
    world:  WORLD_DEFINITION.I_World;
    engine: ENGINE_DEFINITION.I_Engine;
    config: GAME_DEFINITION.I_GameConfiguration;
    canvas: HTMLCanvasElement;
    state: GAME_DEFINITION.GAME_STATE;

    constructor(document:any ,config ?: GAME_DEFINITION.I_GameConfiguration){
        if(config != null)
            this.config = config;
        else{
            this.config = {
                name : "planet",
                world:{
                     world_def: WORLD_DEFINITION.W_DEFAULT,
                },
                engine: {
                    name: "babylon",
                    type: ENGINE_DEFINITION.TYPE.PLANET,
                }
            }
        }
        this.canvas = document.getElementById("renderCanvas"); 
    }
    
    initializeGame(){
        console.log("Initialize Planet Game ",this.config.name);
        this.world = new MWorld(this.config.world);
        this.world.initialize();
        
        console.log("Planet Engine initialization ", this.config.world);
        this.engine = new PlanetEngine(this.world, this.config.engine, this.canvas);
        this.engine.initialize();

        console.log("Planet Engine initialized ",this.engine);
    }


    pauseGame(){
        console.log("Pause Game");
    }

    saveGame(){
        console.log("Save Game");
    }
    
    loadConfiguration(){
        console.log("Load Game Configuration");
    }
    initializeEngine () {
        console.log("Initialize Planet Engine");
    }
    initializeWorld () {
        console.log("Initialize Planet World");
    }
    run () {
        console.log("Run Planet Game");
        this.engine.startRenderLoop();
    }

    exit (){
        console.log("Quit Planet Game");
    }

    // dealing with window event

    resizeWindow(){
        this.engine.resize();
        console.log("Resize Planet Window");
    }
}