// Asynshronous function
// 1. setTimeout
// 2. setInterval

console.log("Statemen-1"); 
setTimeout(() => {
    var result = 0
    for(var i=0;i<10000000000;i++)
    {
        result += 1    
    }
    console.log(result);
},);
console.log("Statemen-2");