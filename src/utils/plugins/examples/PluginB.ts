import {I_Plugin} from '../I_Plugin';

export class PluginB implements I_Plugin {
  name: string;
  version: string;  
  
  init() {
    this.name = "PluginB";
    this.version = "0.0.1";
      console.log("PLUGIN: Initializing PluginB");
    }

    run(): void {
      console.log("PLUGIN: Execute plugin: ", this.name);
  }
    cleanup() {
      console.log("PLUGIN: Cleaning up PluginB");
    }
  }