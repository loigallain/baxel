
import { interpret, createMachine } from 'xstate';
import { uistates } from './uiStates';





export class UIControl{

    /* state machine for UI */
    promiseMachine: any; /// need to understand what the proper type must be
    promiseService: any;

    /* the document in which controls are added*/
    document: any;
    canvas: HTMLCanvasElement;
    
    constructor(document:any){
        this.document = document;
        this.canvas = this.document.getElementById("renderCanvas");
       // this.canvas = this.document.createElement("canvas");
    }


    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    initialize(): void{
        this.promiseMachine =  uistates;
        uistates.context.document = this.document;
        this.promiseService = interpret(this.promiseMachine).onTransition((state) =>
            console.log("STATE UPDATE: ",state));
        this.addListener();
        this.promiseService.start();
    }

    addListener(){
        this.document.addEventListener('keydown', (event) => {
            if (event.code == "Space"){
                this.promiseService.send({type:"SELECT", value: event.code });
            }
            if(event.key == "Control"){
                this.promiseService.send({type:"SWITCH", value: event.key });
            }
        }, false);
    }


}