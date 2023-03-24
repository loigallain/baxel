import * as WORLD_DEF from '@interfaces/World_def';
import * as ENGINE_DEF from '@interfaces/Engine_def';
export interface I_Game {
    world: WORLD_DEF.I_World;
    engine?: ENGINE_DEF.I_Engine;
    configuration?: I_GameConfiguration;
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
declare const DEFAULT: I_GameConfiguration;
export { DEFAULT as CONF_DEFAULT };
