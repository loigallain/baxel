import { Program } from './Program';

import { interpret, createMachine } from 'xstate';
import {schema } from './programState';




export class StateControler {

  promiseMachine: any; /// need to understand what the proper type must be
  promiseService: any;
  program: Program;

  constructor(program: Program){
    this.program = program;
  }


  init(): void{
    this.promiseMachine =  createMachine(schema ,
      {
        actions: {
          consoleLogValue: (context, event) => {
          // Wow! event is typed to { type: 'FOO' }
          console.log(event.type);
          },
          consoleLogValueAgain: (context, event) => {
          // Wow! event is typed to { type: 'FOO' }
          console.log(event.type);
          }
        }
      });
    this.promiseService = interpret(this.promiseMachine).onTransition((state) =>
      console.log("STATE UPDATE: ",state)
    );
  }

  start() : void{
    this.promiseService.start();
  }

  send(event:any):void{
    this.promiseService.send(event);
  }


}