import { createMachine } from "xstate";

export const uistates = createMachine({
    predictableActionArguments: true, //strongly advised
    tsTypes:{} as import("./uiStates.typegen").Typegen0,
     schema: {
       context: {} as { value: string, document: any },
       events: {} as 
         {type: 'SELECT'; value: string }
         |
         { type: 'SWITCH'; value: string }
     },
     initial: 'load',
     context: {
       value: '',
       document: ''
     },
     states: {
       load: {
            type: 'parallel',
            states:{
                scene:{
                    
                    initial: 'rotate',
                    states:{
                        rotate:{
                            on: {
                                SELECT: {
                                actions: 'switchControl',
                                target: 'not_rotate'
                            }
                            }
                        },
                        not_rotate:{
                            on: {
                                SELECT: {
                                actions: 'switchControl',
                                target: 'rotate'
                            }
                            }
                        }
                    }
                },
                text:{
                    
                    initial: 'show',
                    states:{
                        show:{
                            on: {
                                SWITCH: {
                                actions: 'selectText',
                                target: 'hide'
                            }
                            }
                        },
                        hide:{
                            on: {
                                SWITCH: {
                                actions: 'selectText',
                                target: 'show'
                            }
                            }
                        }
                    }
                }
            }
        }
      
    }
},
{
    actions: {
        switchControl: (context, event) => {
            // Wow! event is typed to { type: 'FOO' }
            //console.log("event in state machine", event);
            console.log("Change Control mode");
            var name = event.value;
            // var code = event.code;
            // Alert the key name and key code on keydown
            // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
            let ui = context.document.getElementById("ui");
            if(!ui) throw Error ("Document has no UI div, please check your code");
            // switch whether UI will capture event over scene  
            if(ui.style.pointerEvents == "none")
                ui.style.pointerEvents = "auto";
            else{
                ui.style.pointerEvents = "none"; 
            }
        },
        selectText:(context, event) =>{
            var ui = context.document.getElementById("ui");
            console.log("Change visibility mode");
            if(ui.style.visibility == "hidden"){
                ui.style.visibility = "visible";
                ui.style.pointerEvents = "auto";
            }
            else{
                ui.style.visibility = "hidden"; 
            }
        }/*,    
        consoleLogValueAgain: (context, event) => {
        // Wow! event is typed to { type: 'FOO' }
        console.log(event.type);
        }*/
    
    }
}
);

