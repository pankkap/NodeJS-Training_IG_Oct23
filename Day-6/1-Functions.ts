// Implicit Function Assignment
let greet = ()=>{
    console.log("Hello");
}
// greet = "abc"

// Explicit Function
let greet1:Function;
// greet1 = 132343;

greet1 = function(){
    console.log("This is an Explicit function assignment");
}

// Function Signature
// Function Defination

// Optional Argument
// let add = (a:number, b:number, c?:number) => a+b+c

// Default Argument
let add = (a:number, b:number, c:number=10) => a+b+c;

// Function calling
console.log(add(5,10,25))


let sum= (...nums:number[])=>nums.reduce((a,b)=>a+b)
console.log(sum(1,2,3,4,5));
