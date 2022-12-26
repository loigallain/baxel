import {
    Engine,
    Scene,
    ArcRotateCamera,
    HemisphericLight,
    Vector3,
    MeshBuilder,
    Mesh,
    ActionManager,
    PointerEventTypes,
    KeyboardEventTypes,
    ExecuteCodeAction,
    Matrix
} from "babylonjs";

import * as BABYLON from "babylonjs";
//////////////////////////////////////////////// NOISE

import { W_DEFINITION, W_DEFAULT } from "./world_def";
import { World } from "./MWorld";


// get the canvas where the action happens
var canvas: any = document.getElementById("renderCanvas");
var world: World = new World(W_DEFAULT)

//////////////////////////////////////////////////////////
// initialization of document

var engine: Engine = new Engine(canvas, true);
var scene: Scene = createScene();
addEventListener(scene);
var voxRegistry = initVoxelMesh(scene);


// start creating the world
populateWorld(scene);


function initVoxelMesh(scene: Scene):{ id: number, mesh: Mesh }[]{
    var meshes: { id: number, mesh: Mesh }[] = [];
    
    var mesh = MeshBuilder.CreateBox("default", {});
    mesh.isVisible = false;
    var id = 0;
    meshes.push({id , mesh });
    
    return meshes;

}


function createScene(): Scene {
    
}

function populateWorld(scene: Scene) {
//addVoxelAt(null,2, 2, 2, scene);
var sizechunck = 256;
var i,j;
var hmax = 100;
var depth = -10;
for(i = 0; i< sizechunck; i++){
 for(j = 0 ; j < sizechunck ; j++){
    var height = heightMap.GetNoise(i,j);
    
        
    var height2 = (hmax-depth)/2*height + (hmax+depth)/2 ;
     addVoxelAt( null, i ,  height2, j, scene);
 }
}
}

function addVoxelAt(type: number, x: number, y: number, z: number, scene: Scene) {
    if(type == null) type = 0;

    var voxcl = voxRegistry[type].mesh.createInstance("nom" + Math.round(Math.random() * 1000));
    //var matrix = BABYLON.Matrix.Translation( x, y, z);
    //var voxcl = voxRegistry[type].mesh.thinInstanceAdd(matrix , false);
    voxcl.position = new Vector3(x, y, z);
    voxcl.isPickable = true;
    voxcl.actionManager = new ActionManager(scene);

    voxcl.actionManager
        .registerAction(
            new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger, function (bjsevt) {
                    // removes mesh on left click
                    if (bjsevt.sourceEvent.button == 0) {
                        scene.removeMesh(bjsevt.source);
                        return;
                    }
                    // add mesh on right click
                    if (bjsevt.sourceEvent.button == 2) {
                        var pickResult = scene.pick(bjsevt.pointerX, bjsevt.pointerY);
                        var face = Math.floor(pickResult.faceId / 2);
                        var x, y, z;
                        x = bjsevt.source.position.x;
                        y = bjsevt.source.position.y;
                        z = bjsevt.source.position.z;
                        if (face == 0) {
                            z += 1;
                        } else if (face == 1) {
                            z -= 1;
                        } else if (face == 2) {
                            x += 1;
                        } else if (face == 3) {
                            x -= 1;
                        } else if (face == 4) {
                            y += 1;
                        } else if (face == 5) {
                            y -= 1;
                        }
                        addVoxelAt(0, x, y, z, scene);
                    }
                }
            )
        );


// highlight bounding box when overing
    voxcl.actionManager
        .registerAction(
            new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOverTrigger, function (bjsevt) {
                    bjsevt.source.showBoundingBox = true;
                }
            )
        ); 
// remove bounding box when leaving
    voxcl.actionManager
        .registerAction(
            new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOutTrigger, function (bjsevt) {
                    bjsevt.source.showBoundingBox = false;
                }
            )
        ); 
}


function addEventListener(scene: Scene) {
    //When click event is raised
    scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
            case PointerEventTypes.POINTERDOWN:
                //console.log("POINTER DOWN");
                break;
            case PointerEventTypes.POINTERUP:
                //  console.log("POINTER UP");
                break;
            case PointerEventTypes.POINTERMOVE:
                //  console.log("POINTER MOVE");
                break;
            case PointerEventTypes.POINTERWHEEL:
                //   console.log("POINTER WHEEL");
                break;
            case PointerEventTypes.POINTERPICK:
                 console.log("POINTER PICK");
                break;
            case PointerEventTypes.POINTERTAP:
                // console.log("POINTER TAP");
                break;
            case PointerEventTypes.POINTERDOUBLETAP:
                // console.log("POINTER DOUBLE-TAP");
                break;
        }
    });

    scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
                // console.log("KEY DOWN: ", kbInfo.event.key);
                break;
            case BABYLON.KeyboardEventTypes.KEYUP:
                //  console.log("KEY UP: ", kbInfo.event.code);
                break;
        }
    });
}




engine.runRenderLoop(() => {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
/*
    window.addEventListener("click", function(e){
            console.log("hellow you did click on babylon scene ",e);
    })*/