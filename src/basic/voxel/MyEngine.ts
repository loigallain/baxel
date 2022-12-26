import { MaterialFactory } from '../MaterialFactory';
import * as BABYLON from "babylonjs";
import { Scene } from "babylonjs";
import * as WORLD from '@/interface/World_def';
import * as ENGINE_DEF from '@/interface/Engine_def';

import { EngineUtils } from '@/utils/EngineUtils';

import { VoxelData } from './VoxelData';

export class MyEngine implements ENGINE_DEF.I_Engine{
    scene: Scene;
    world: WORLD.I_World;
    engine: BABYLON.Engine;
    config: ENGINE_DEF.I_EConfiguration;
    canvas: HTMLCanvasElement;
    description: "this is a pure voxel based engine";
    debug:  boolean;

    edgeColor: BABYLON.Color4;

    // material map
    material: Map<string, BABYLON.Material>

    constructor(world: WORLD.I_World, config: ENGINE_DEF.I_EConfiguration , drawArea: HTMLCanvasElement) {
        this.world = world;
        this.config = config;
        this.canvas = drawArea;
        this.debug = true;
    };

    initialize(): Scene {
        console.log("initialize engine ",this.config);

        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = new Scene(this.engine);
        this.edgeColor = new BABYLON.Color4( 0., 0., 0., 1.);
        if(this.debug){
            this.scene.debugLayer.show();
            this.scene.debugLayer.show({
                embedMode: true,
              });
        }
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this.scene);
        //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);
        //var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, 0), this.scene);
        

        camera.attachControl(this.canvas, true);
      
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
      
        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this.scene);
        var lightX = new BABYLON.DirectionalLight("directX", new BABYLON.Vector3(1, 0, 0), this.scene);
        var lightY = new BABYLON.DirectionalLight("directY", new BABYLON.Vector3(0, 1, 0), this.scene);
        var lightZ = new BABYLON.DirectionalLight("directZ", new BABYLON.Vector3(0, 0, 1), this.scene);
        var lightXi = new BABYLON.DirectionalLight("directX m", new BABYLON.Vector3(-1, 0, 0), this.scene);
        var lightYi = new BABYLON.DirectionalLight("directY m", new BABYLON.Vector3(0, -1, 0), this.scene);
        var lightZi = new BABYLON.DirectionalLight("directZ m", new BABYLON.Vector3(0, 0, -1), this.scene);
        var options = {
            groundColor: BABYLON.Color3.Gray(),
        };
        
        var helper = this.scene.createDefaultEnvironment(options);
        this.scene.createDefaultSkybox(null, true, 1000);

        // initialize material map
        this.material = new Map<string,BABYLON.Material>();

        var mat = new BABYLON.StandardMaterial("mat", this.scene);
        var texture =  MaterialFactory.getTexture(".\\dist\\img\\bitmap.jpg", this.scene);
        mat.diffuseTexture = texture;
        this.material.set("ground", mat);
        

        this.addVoxel();
        //this.addChunk(10,10,[0,0,0]);

        this.scene.onReadyObservable.add(function () {
            for (var i = 0; i < this.scene.meshes.length; i++) {

                var mesh = this.scene.meshes[i];
                //ignore these generic meshes
                if (mesh.name === "BackgroundSkybox" || mesh.name === "BackgroundPlane") {
                    mesh.isPickable = false;
                    continue;
                }
            }
        }
        );
        /*
                // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
                var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this.scene);
        
                // Default intensity is 1. Let's dim the light a small amount
                light.intensity = 0.7;
        */
                // Our built-in 'sphere' shape. Params: name, options, scene
                //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1, segments: 32}, this.scene);
        
                // Move the sphere upward 1/2 its height
               //sphere.position.y = 1;
        
                // Our built-in 'ground' shape. Params: name, options, scene
                var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, this.scene);
        
        this.addEventListener();
       // this.renderLoop();
       EngineUtils.showAxis(5, this.scene);
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
                    //console.log("POINTER UP");
                    break;
                case BABYLON.PointerEventTypes.POINTERMOVE:
                    //console.log("POINTER MOVE");
                    break;
                case BABYLON.PointerEventTypes.POINTERWHEEL:
                    //console.log("POINTER WHEEL");
                    break;
                case BABYLON.PointerEventTypes.POINTERPICK:
                    //console.log("POINTER PICK");
                    break;
                case BABYLON.PointerEventTypes.POINTERTAP:
                    //console.log("POINTER TAP");
                    break;
                case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
                    //console.log("POINTER DOUBLE-TAP");
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

    addVector(a:number[], b:number[], l: number): number[]{
        var ret = [];
        for (var i=0;i<l;i++){
            ret = ret.concat(a[i]+b[i]);
        }
        return ret;
    }

    addVoxel(position?: number[]){
       
        if(!position){
            position = [0,0,0];
        }
        var positions = [];
        var indices = VoxelData.INDICES;
       
        for(var k = 0; k<36 ; k++){
            positions = positions.concat(this.addVector(VoxelData.VERTICES[VoxelData.SEQ_VERTICES[k]],position,3));
        }

        // a voxel is a mesh
        //creation of faces, vertices sequences follow the right hand fist rule to show the normal 

        // mesh definition per triangle
        // UV for texture    
        var faceUV = [];
        faceUV = faceUV.concat(VoxelData.FRONT_UV);
        faceUV = faceUV.concat(VoxelData.RIGHT_UV);
        faceUV = faceUV.concat(VoxelData.BACK_UV);
        faceUV = faceUV.concat(VoxelData.LEFT_UV);
        faceUV = faceUV.concat(VoxelData.TOP_UV);
        faceUV = faceUV.concat(VoxelData.BOTTOM_UV);
        // colors are associated to vertices with 4 component RGBA expressed from 0 to 1	
        //var colors = [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1];

        //Create a custom mesh  
	    var customMesh = new BABYLON.Mesh("voxel", this.scene);
	    //Empty array to contain calculated values
        var normals = [];
        var vertexData = new BABYLON.VertexData();
        BABYLON.VertexData.ComputeNormals(positions, indices, normals);
        //Assign positions, indices and normals to vertexData
        vertexData.positions = positions;
        vertexData.indices = indices;
        vertexData.normals = normals;
        //vertexData.colors = colors;
        vertexData.uvs = faceUV;
        //Apply vertexData to custom mesh
        vertexData.applyToMesh(customMesh,true);
        // mesh is swhon wirefremae
        
        //mat.wireframe = true;// TO DO have an general flag for wireframe
        //mat.backFaceCulling = false;
        customMesh.material = this.material.get("ground");

        //customMesh.edgesColor = this.edgeColor;

    };

    addChunk( size: number , heigth: number, position?: number[]){
        if(!position){
            position = [0,0,0];
        }

        var x , z , y;
        for (x = 0 ; x < size; x++){
            for(z=0 ; z < size ; z++){
                for(y = 0 ; y <heigth; y++){
                    this.addVoxel([x,y,z]);
                }

            }
        }
    }

}