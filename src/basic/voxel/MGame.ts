
import * as WORLD_DEFINITION from '@/interface/World_def';
import * as ENGINE_DEFINITION from '@/interface/Engine_def';
import * as GAME_DEFINITION from '@/interface/Game_def';

import {MWorld} from '../MWorld';
import {MyEngine} from './MyEngine';

import {getLogger} from '@/utils/Logger';



export class MGame implements GAME_DEFINITION.I_Game{
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
                name : "Game",
                world:{
                     world_def: WORLD_DEFINITION.W_DEFAULT,
                },
                engine: {
                    name: "babylon",
                    type: ENGINE_DEFINITION.TYPE.VOXEL
                }
            }
        }
        this.canvas = document.getElementById("renderCanvas"); 
    }
    
    initializeGame(){
        console.log("Initialize Game ",this.config.name);
        this.world = new MWorld(this.config.world);
        this.world.initialize();
        
        console.log("World initialized ", this.config.world);
        this.engine = new MyEngine(this.world, this.config.engine, this.canvas);
        this.engine.initialize();

        console.log("Engine initialized ",this.engine);
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
        console.log("Initialize Engine");
    }
    initializeWorld () {
        console.log("Initialize World");
    }
    run () {
        console.log("Run Game");
        this.engine.startRenderLoop();
    }

    exit (){
        console.log("Quit Game");
    }

    // dealing with window event

    resizeWindow(){
        this.engine.resize();
        console.log("Resize Window");
    }
}