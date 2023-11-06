// Implicit declaration
let arr1 = ["html", "css", "JS",454]
arr1.push("TS")
arr1.push(4541)

// Explicit declaration
let arr2:(string|number)[]=[];
arr2.push("React");
arr2.push(434);

let arr3:any[]=[];



// to execute TS code directly
// npm i -g ts-node