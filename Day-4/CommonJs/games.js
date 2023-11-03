var data = require('./library')

console.log(data.gameName);
console.log(data.display("Enter name"));


// creating obj for class ABCGGame

let obj = new data.ABCGGame(data.gameName, 30, "Jackpot")
console.log(obj.getGameData());

data.dat()


