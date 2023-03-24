import * as WORLD_DEFINITION from '@interfaces/World_def';
import * as ENGINE_DEFINITION from "@interfaces/Engine_def";
import * as GAME_DEFINITION from "@interfaces/Game_def";
export declare class PlanetGame implements GAME_DEFINITION.I_Game {
    world: WORLD_DEFINITION.I_World;
    engine: ENGINE_DEFINITION.I_Engine;
    config: GAME_DEFINITION.I_GameConfiguration;
    canvas: HTMLCanvasElement;
    state: GAME_DEFINITION.GAME_STATE;
    constructor(document: any, config?: GAME_DEFINITION.I_GameConfiguration);
    initializeGame(): void;
    pauseGame(): void;
    saveGame(): void;
    loadConfiguration(): void;
    initializeEngine(): void;
    initializeWorld(): void;
    run(): void;
    exit(): void;
    resizeWindow(): void;
}
