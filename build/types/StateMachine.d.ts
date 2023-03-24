import { Program } from './Program';
export declare class StateControler {
    promiseMachine: any;
    promiseService: any;
    program: Program;
    constructor(program: Program);
    init(): void;
    start(): void;
    send(event: any): void;
}
