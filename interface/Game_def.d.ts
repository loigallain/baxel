import * as WORLD_DEF from '@/interface/World_def';
import * as ENGINE_DEF from '@/interface/Engine_def';
declare const enum G_STATE {
    EMPTY = 0,
    INITIALIZED = 1,
    CONFIG_LOADED = 2,
    ENGINE_INIT = 3,
    WORLD_INIT = 4,
    RUNNING = 5,
    PAUSED = 6,
    SAVING = 7,
    EXITING = 8
}
export interface I_Game {
    world: WORLD_DEF.I_World;
    engine?: ENGINE_DEF.I_Engine;
    configuration?: I_GameConfiguration;
    state: G_STATE;
    initializeGame: () => void;
    loadConfiguration: () => void;
    initializeEngine: () => void;
    initializeWorld: () => void;
    run: () => void;
    pauseGame: () => void;
    saveGame: () => void;
    resizeWindow: () => void;
    exit: () => void;
}
export interface I_GameConfiguration {
    name: string;
    world: WORLD_DEF.I_WConfiguration;
    engine: ENGINE_DEF.I_EConfiguration;
}
export interface I_Error {
    code: number;
    message: string;
}
export { G_STATE as GAME_STATE };
