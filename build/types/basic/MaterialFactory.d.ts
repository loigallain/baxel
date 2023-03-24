import { Scene, Texture } from "babylonjs";
export declare class MaterialFactory {
    static textureMap: Map<string, Texture>;
    private static registerTexture;
    static getTexture(path_: string, scene: Scene): Texture;
}
