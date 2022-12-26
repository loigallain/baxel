import { I_World, W_DEFAULT } from "./interface/World_def";
import { I_Game, GAME_STATE } from "./interface/Game_def";
import {MGame} from './basic/voxel/MGame';
import {PlanetGame} from'@/basic/planet/PlanetGame';



// game is nowhere started 
// variable to follow up on where game is at
var STATE = GAME_STATE.EMPTY;

/**
 *  initial creation of the Game instance
 *  context is given as the document into which the game shall execute
 */
var game: I_Game;
var pgame: I_Game;
var selectGame : I_Game;
game = new MGame(document );
pgame = new PlanetGame(document);

selectGame = game;

try {
    selectGame.initializeGame();
    STATE = GAME_STATE.INITIALIZED;
}
catch (e){
    console.log("error during initialization ", e)
}

printState();

try{
    STATE = GAME_STATE.RUNNING;
    selectGame.run();
}
catch (e){
    console.log("Error while game is running ", e)
}
printState();






// UTILITIES FOR MAIN
function printState(){
    console.log("Current State is "+STATE);
}


// event listener for window
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    game.resizeWindow();
});
