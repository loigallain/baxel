import * as WORLD_DEF from '@/interface/World_def';
import * as ENGINE_DEF from '@/interface/Engine_def';

// overall state for Game
const enum G_STATE {
    EMPTY,
    INITIALIZED,
    CONFIG_LOADED,
    ENGINE_INIT,
    WORLD_INIT,
    RUNNING,
    PAUSED,
    SAVING,
    EXITING    
};

export interface I_Game{
    world :WORLD_DEF.I_World;
    engine ?: ENGINE_DEF.I_Engine;
    configuration ?: I_GameConfiguration;
    
    // transition for Game
    state: G_STATE;

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

// transitions in state Machine
enum G_TRANSITION{

};

export interface I_Error{
    code: number;
    message: string;
}

export  {G_STATE as GAME_STATE};