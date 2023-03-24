
import {I_Plugin} from '../plugins/I_Plugin';

export class PluginManager {
  /** plugins dictionary: each plugin is identified through a to be created unique name */
  private plugins: Map<string,I_Plugin> = new Map<string, I_Plugin>();
  
  /** execution sequence for plugins, the vector simply translates the sequence into which plugins must be invoked */
  private pluginOrder: string[] = [];
/*    constructor(pluginConfigs: PluginConfig[]) {
      this.plugins = [];
  
      for (const config of pluginConfigs) {
        const plugin = require(config.path);
  
        if (plugin.default) {
          // If the plugin has a default export, use that as the plugin instance
          const pluginInstance = new plugin.default(config.config);
          this.plugins.push(pluginInstance);
        } else {
          // Otherwise, assume the plugin is a class and create an instance of it
          const pluginInstance = new plugin(config.config);
          this.plugins.push(pluginInstance);
        }
      }
    } */

    async loadPlugins(plugins:JSON): Promise<void> {
      
    }


    addPlugin(name:string, plugin: I_Plugin): void {
      console.log("PLUGIN MANAGER: Adds ",name);
      this.plugins.set(name,plugin);
      this.pluginOrder.push(name);
      plugin.init();
    }

    executeBefore(pluginA: string, pluginB: string): void {
      console.log("PLUGIN MANAGER: Execute ",pluginA, " before ",pluginB);
      console.log("PLUGINMANAGER: Sequence ", this.pluginOrder);
      const indexA = this.pluginOrder.indexOf(pluginA);
      const indexB = this.pluginOrder.indexOf(pluginB);
      if (indexA === -1 || indexB === -1) {
        return;
      }
      this.pluginOrder.splice(indexB, 0, this.pluginOrder.splice(indexA, 1)[0]);
      console.log("PLUGINMANAGER: New Sequence ", this.pluginOrder);
    }
  
    run(): void {
      this.pluginOrder.forEach(name => {
        const plugin = this.plugins.get(name);
        plugin.run();
      // Perform the main program logic here
      });
    }

    clean(): void{
      this.plugins.forEach(p => p.cleanup());
    }
  }