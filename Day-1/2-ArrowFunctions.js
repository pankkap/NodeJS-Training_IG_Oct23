//ES5 Function

// 1. Named Function
// 2. Invoking function

// function names(n)
// {
//     return n
// }
// console.log(names("Pankaj"))


// var name = function(n)
// {
//     return n
// };
// console.log(name("Pankaj"))

// (function self(){
//     console.log("I am self invkoing Function");
// })();


// ES6 FUnctions
var add = (a,b)=> a+b
var sqr = a => a*a

console.log(add(5,10))
console.log(sqr(5))


let data = [5,6,7,8,9,6]

let arr1 = data.forEach(i => {
    console.log(i*i);
});


let arr = data.map((i)=>i*i)
console.log(arr);
console.log(arr1);
console.log(data);