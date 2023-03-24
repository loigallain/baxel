import * as I_Plugin from '../I_Plugin';
export declare class PluginA implements I_Plugin.I_Plugin {
    name: string;
    version: string;
    init(): void;
    run(): void;
    cleanup(): void;
}
