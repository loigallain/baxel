import { StateControler } from './StateMachine';

import { Program } from './Program';


const _NAME = 'RAGNAROCK';


/**
 *  initial creation of the Game instance
 *  context is given as the document into which the game shall execute
 */
var program: Program;

const config = {
    name: _NAME,
    world: { 
               
        hmax    :       100,
        SEED    :       455586,
        VIZ     :        1, //1 for voxel, 2 for marching cube, 3 for
        depth   :       -10,
        sealevel:       30, // below is sea or ground
        cave    :       50, // threshold for cave expressed in %
        name    :       "default",
        debug   :      true,
        temperature_gradient: 10, // variation of temperature with altitude
        humidity_gradient:  10, //variation of humidity with altitude
        biomes  :       []
    
    },
    engine:{
        name: "rgnrk",
        type: "voxel"
    }

}


program = new Program(document, config);

// event listener for window
// Watch for browser resize events
window.addEventListener("resize", function () {
    program.resizeWindow();
});

try{
    program.initialize();
}
catch (e){
    console.log("Error during initialization of ", _NAME, e)
}

try{
    program.run();
}
catch (e){
    console.log("Error while ", _NAME, " is running ", e)
}




