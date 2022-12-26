import * as BABYLON from "babylonjs";
import { Scene } from "babylonjs";

export class EngineUtils {

    static showAxis( size:number , scene: Scene): void {
    	
  
    	var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
      		BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
      		new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
      	], scene, true);
    	axisX.color = new BABYLON.Color3(1, 0, 0);
    	var xChar = EngineUtils.makeTextPlane("X", "red", size / 10, scene);
    	xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    	var axisY = BABYLON.Mesh.CreateLines("axisY", [
        	 BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
        	new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
        ], scene, true);
    	axisY.color = new BABYLON.Color3(0, 1, 0);
    	var yChar = EngineUtils.makeTextPlane("Y", "green", size / 10, scene);
    	yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    	var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
        	BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
        	new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
        ], scene , true);
    	axisZ.color = new BABYLON.Color3(0, 0, 1);
    	var zChar = EngineUtils.makeTextPlane("Z", "blue", size / 10, scene);
    	zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
	};

    static makeTextPlane (text: string, color:string, size:number, scene:Scene): BABYLON.Mesh {
        var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
        var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
        var material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
        material.backFaceCulling = false;
        material.specularColor = new BABYLON.Color3(0, 0, 0);
        material.diffuseTexture = dynamicTexture;
        plane.material = material;
        return plane;
    };

    
}