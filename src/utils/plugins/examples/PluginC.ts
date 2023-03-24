import {I_Plugin} from '../I_Plugin';

export class PluginC implements I_Plugin {
  name: string;
  version: string;  
  
  init() {
    this.name = "PluginC";
    this.version = "0.0.1";
      console.log("Initializing PluginC");
    }
    run(): void {
      console.log("Execute plugin: ", this.name);
  }
    cleanup() {
      console.log("Cleaning up PluginC");
    }
  }