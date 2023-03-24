import { I_Plugin } from '../plugins/I_Plugin';
export declare class PluginManager {
    private plugins;
    private pluginOrder;
    loadPlugins(plugins: JSON): Promise<void>;
    addPlugin(name: string, plugin: I_Plugin): void;
    executeBefore(pluginA: string, pluginB: string): void;
    run(): void;
    clean(): void;
}
