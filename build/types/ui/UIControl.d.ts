export declare class UIControl {
    promiseMachine: any;
    promiseService: any;
    document: any;
    canvas: HTMLCanvasElement;
    constructor(document: any);
    getCanvas(): HTMLCanvasElement;
    initialize(): void;
    addListener(): void;
}
