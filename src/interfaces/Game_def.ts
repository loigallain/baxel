
import * as WORLD_DEF from '@interfaces/World_def';
import * as ENGINE_DEF from '@interfaces/Engine_def';

export interface I_Game{
    world :WORLD_DEF.I_World;
    engine ?: ENGINE_DEF.I_Engine;
    configuration ?: I_GameConfiguration;
    
    // SPI for Game
    initializeGame: () => void;
    loadConfiguration: () => void;
    initializeEngine: () => void;
    initializeWorld: () => void;
    run :() => void;
    pauseGame: () => void;
    saveGame: () => void;
    resizeWindow: () => void;
    exit: () => void;
}

export interface I_GameConfiguration{
    name: string;
    world: WORLD_DEF.I_WConfiguration;
    engine: ENGINE_DEF.I_EConfiguration;

}

export interface I_Error{
    code: number;
    message: string;
}

const DEFAULT : I_GameConfiguration = {
        name : "Game",
        world:{
            hmax    :       100,
            SEED    :       455586,
            VIZ     :        1, //1 for voxel, 2 for marching cube, 3 for
            depth   :       -10,
            sealevel:       30, // below is sea or ground
            cave    :       50, // threshold for cave expressed in %
            name    :       "default",
            debug   :      true,
            temperature_gradient: 10, // variation of temperature with altitude
            humidity_gradient:  10, //variation of humidity with altitude
            biomes  :       [],
        },
        engine: {
            name: "babylon",
            type: ENGINE_DEF.TYPE.VOXEL
        },
    }

export {DEFAULT as CONF_DEFAULT};

