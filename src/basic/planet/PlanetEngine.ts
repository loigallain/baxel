import { MaterialFactory } from '../MaterialFactory';
import * as BABYLON from "babylonjs";
import { Scene } from "babylonjs";
import * as WORLD from '@/interface/World_def';
import * as ENGINE_DEF from '@/interface/Engine_def';

import { EngineUtils } from '@/utils/EngineUtils';


export class PlanetEngine implements ENGINE_DEF.I_Engine{

    scene: Scene;
    world: WORLD.I_World;
    engine: BABYLON.Engine;
    config: ENGINE_DEF.I_EConfiguration;
    canvas: HTMLCanvasElement;
    description: "this is planet engine";
    debug:  boolean;

    edgeColor: BABYLON.Color4;

    constructor(world: WORLD.I_World, config: ENGINE_DEF.I_EConfiguration , drawArea: HTMLCanvasElement) {
        this.world = world;
        this.config = config;
        this.canvas = drawArea;
        this.debug = true;
    };

    initialize(): Scene {
        console.log("initialize Planet engine ",this.config);

        var nplanet = Math.floor(Math.random()*10);
        var starRadius = 1e3;
        var orbit:number[] , radius:number[];
        orbit = new Array(nplanet);
        radius = new Array(nplanet);

        for(var i = 0 ; i<nplanet ; i++){
            orbit[i]= starRadius*(1+Math.exp(i*1.0/10));
            radius[i] = starRadius/10.*Math.random();
        }
        console.log("Star system has ",nplanet," planets.\n which orbits are ",orbit,"\nand radius ",radius);

        //observer position and target
        var target = new BABYLON.Vector3(0,0,0);
        var alpha = Math.PI/2;
        var beta = Math.PI/4;
        var distance = starRadius * 10;

        
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = new Scene(this.engine);
        this.edgeColor = new BABYLON.Color4( 0., 0., 0., 1.);
        if(this.debug){
            this.scene.debugLayer.show();
            this.scene.debugLayer.show({
                embedMode: true,
              });
        }
        var camera = new BABYLON.ArcRotateCamera("camera1",  alpha, beta, distance, target, this.scene);
  	    camera.attachControl(this.canvas, true);
        // This targets the camera to scene origin
        
      /*
        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this.scene);
        var lightX = new BABYLON.DirectionalLight("directX", new BABYLON.Vector3(1, 0, 0), this.scene);
        var lightY = new BABYLON.DirectionalLight("directY", new BABYLON.Vector3(0, 1, 0), this.scene);
        var lightZ = new BABYLON.DirectionalLight("directZ", new BABYLON.Vector3(0, 0, 1), this.scene);
        var lightXi = new BABYLON.DirectionalLight("directX m", new BABYLON.Vector3(-1, 0, 0), this.scene);
        var lightYi = new BABYLON.DirectionalLight("directY m", new BABYLON.Vector3(0, -1, 0), this.scene);
        var lightZi = new BABYLON.DirectionalLight("directZ m", new BABYLON.Vector3(0, 0, -1), this.scene);*/
        var options = {
            groundColor: BABYLON.Color3.Gray(),
        };
        
        var helper = this.scene.createDefaultEnvironment(options);
        //this.scene.createDefaultSkybox(null, true, 1000);


        //add planets
        for(var i = 0 ;i<nplanet ; i++){
            this.createPlanet(orbit[i], radius[i]);
        }
        //add star
    this.createStar(starRadius);
       // this.addEventListener();
       // this.renderLoop();
       EngineUtils.showAxis(1.2*starRadius, this.scene);
       
       this.scene.onReadyObservable.add(function () {
        for (var i = 0; i < this.scene.meshes.length; i++) {

            var mesh = this.scene.meshes[i];
            //ignore these generic meshes
            if (mesh.name === "BackgroundSkybox" || mesh.name === "BackgroundPlane") {
                mesh.isPickable = false;
                continue;            }
        }
    }
    );
        return this.scene;
    }

    // adds listener on scene
    addEventListener() {
        //When click event is raised
        this.scene.onPointerObservable.add((pointerInfo) => {
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERDOWN:
                    console.log("POINTER DOWN ",pointerInfo);
                    break;
                case BABYLON.PointerEventTypes.POINTERUP:
                    console.log("POINTER UP");
                    break;
                case BABYLON.PointerEventTypes.POINTERMOVE:
                    console.log("POINTER MOVE");
                    break;
                case BABYLON.PointerEventTypes.POINTERWHEEL:
                    console.log("POINTER WHEEL");
                    break;
                case BABYLON.PointerEventTypes.POINTERPICK:
                    console.log("POINTER PICK");
                    break;
                case BABYLON.PointerEventTypes.POINTERTAP:
                    console.log("POINTER TAP");
                    break;
                case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
                    console.log("POINTER DOUBLE-TAP");
                    break;
            }
        });

        this.scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    console.log("KEY DOWN: ", kbInfo.event.key);
                    break;
                case BABYLON.KeyboardEventTypes.KEYUP:
                    console.log("KEY UP: ", kbInfo.event.key);
                    break;
            }
        });
    }

    startRenderLoop() {
        // Run the render loop.
        this.engine.runRenderLoop(() =>
        {
            this.scene.render();
        });

        // The canvas/window resize event handler.
        window.addEventListener("resize", () =>
        {
            this.engine.resize();
        });
    }

    resize() {
        this.engine.resize();
    }

    createPlanet(distanceToStar: number, radius: number){
        var node = new BABYLON.TransformNode("Node:"+"planet", this.scene);
        var planet = BABYLON.MeshBuilder.CreateGeodesic("planet",{size:radius}, this.scene);
        planet.parent = node;
        node.position = new BABYLON.Vector3(0,0,distanceToStar);
    }

    createStar(radius){
        BABYLON.MeshBuilder.CreateIcoSphere("star", {radius:radius}, this.scene);
        var l = new BABYLON.PointLight("starlight", new BABYLON.Vector3(0,0,0), this.scene);
        var gl = new BABYLON.GlowLayer("glow", this.scene);
    }
}