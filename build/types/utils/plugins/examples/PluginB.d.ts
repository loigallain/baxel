import { I_Plugin } from '../I_Plugin';
export declare class PluginB implements I_Plugin {
    name: string;
    version: string;
    init(): void;
    run(): void;
    cleanup(): void;
}
