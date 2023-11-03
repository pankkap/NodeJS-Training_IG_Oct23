let dat = ()=>{
    console.log("something");
} 

let gameName = "Cascading Wild"

 function display(name){
    return `Welcome to ${name}`
}

 class ABCGGame
{
    constructor(name, size, feature)
    {
        this.name = name
        this.size = size
        this.feature = feature
    }
    getGameData()
    {
        return `Game Name: ${this.name} \nGame Size: ${this.size} \nGame Feature: ${this.feature}`
    }
}

export {gameName, display, ABCGGame} 
export default dat