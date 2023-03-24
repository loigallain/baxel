import { MyEngine } from './engine/voxel/MyEngine';
import { MWorld } from './engine/MWorld';
import { UIControl } from './ui/UIControl';


import { StateControler } from './StateMachine';

import {PluginManager} from '@utils/plugins/PluginManager';


import * as WORLD_DEFINITION from '@interfaces/World_def';
import * as ENGINE_DEFINITION from '@interfaces/Engine_def';
import * as GAME_DEFINITION from '@interfaces/Game_def';
import { SelectionPanel } from 'babylonjs-gui';

export class Program{

    pluginManager: PluginManager;
    stateControler: StateControler;
    renderer: ENGINE_DEFINITION.I_Engine;
    world: WORLD_DEFINITION.I_World;
    document: Document;
    uiControl: UIControl;
    // StateManager and service
    configuration ?: GAME_DEFINITION.I_GameConfiguration;

    constructor(document:Document , config ?: GAME_DEFINITION.I_GameConfiguration ){
        
        if(config != null)
            this.configuration = config;
        else{
            this.configuration = GAME_DEFINITION.CONF_DEFAULT;
        }
        
        
        this.pluginManager = new PluginManager();
       
        this.document = document;
        this.uiControl = new UIControl(this.document);

        this.stateControler = new StateControler(this);


    }



    initialize():void{
        this.stateControler.init();
        this.uiControl.initialize();

        console.log("Initialize Game ",this.configuration.name);
        this.world = new MWorld(this.configuration.world);
        this.world.initialize();
        
        console.log("World initialized ", this.configuration.world);
        this.renderer = new MyEngine(this.world, this.configuration.engine, this.uiControl.canvas);
        this.renderer.initialize();

        console.log("Engine initialized ",this.renderer);
    }

    run(): void{
        this.stateControler.start();
        this.renderer.startRenderLoop();
        this.stateControler.send({type:'FOO', value:"riendutout"})
        this.stateControler.send({type:'FOO', value:"qqch"})
        
    }

    dispose(): void{
        this.pluginManager.clean();
    }

    resizeWindow() : void{
        if(this.renderer === undefined)
            console.log("Renderer is not defined");
        this.renderer.resize();
    }
    
}