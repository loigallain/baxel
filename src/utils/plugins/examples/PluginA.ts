import { ConstraintAxisLimitMode } from 'babylonjs/Physics/v2/IPhysicsEnginePlugin';
import * as I_Plugin from '../I_Plugin';

export class PluginA implements I_Plugin.I_Plugin {
  name: string;
  version: string;  
  
  init() {
    this.name = "PluginA";
    this.version = "0.0.1";
    console.log("Initializing PluginA");
    }

    run(): void {
        console.log("Execute plugin: ", this.name);
    }
  
    cleanup() {
      console.log("Cleaning up PluginA");
    }
  }