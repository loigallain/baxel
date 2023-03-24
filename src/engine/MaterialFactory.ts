import {Scene, Texture} from "babylonjs";

export class MaterialFactory{

    static textureMap = new Map<string, Texture>();
    

    private static registerTexture(path_:string, scene:Scene): Texture{
        var texture =  new Texture(".\\dist\\resources\\img\\bitmap.jpg", scene);
        this.textureMap.set(path_, texture);
        return texture;
    }

    static getTexture(path_: string, scene:Scene): Texture{
        var t = this.textureMap.get(path_);
        if(t === undefined){
            return this.registerTexture(path_, scene);
        }
        else{
            return t;
        }
    }
}