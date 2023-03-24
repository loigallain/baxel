import { UIControl } from './ui/UIControl';
import { StateControler } from './StateMachine';
import { PluginManager } from '@utils/plugins/PluginManager';
import * as WORLD_DEFINITION from '@interfaces/World_def';
import * as ENGINE_DEFINITION from '@interfaces/Engine_def';
import * as GAME_DEFINITION from '@interfaces/Game_def';
export declare class Program {
    pluginManager: PluginManager;
    stateControler: StateControler;
    renderer: ENGINE_DEFINITION.I_Engine;
    world: WORLD_DEFINITION.I_World;
    document: Document;
    uiControl: UIControl;
    configuration?: GAME_DEFINITION.I_GameConfiguration;
    constructor(document: Document, config?: GAME_DEFINITION.I_GameConfiguration);
    initialize(): void;
    run(): void;
    dispose(): void;
    resizeWindow(): void;
}
