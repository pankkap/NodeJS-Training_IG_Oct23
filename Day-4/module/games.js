// import {gameName, display, ABCGGame} from './library.js' 
// import { display } from './library.js'; 
// import { ABCGGame } from './library.js'; 
import imp from './library.js'
import * as data from './library.js'
console.log(data.gameName);
console.log(data.display("Enter name"));


// creating obj for class ABCGGame

let obj = new data.ABCGGame(data.gameName, 30, "Jackpot")
console.log(obj.getGameData());

imp()


