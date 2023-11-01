// Map, Reduce, Filter

let arr = new Array(1,2,3,4,5)
// for(let i =0;i<arr.length;i++)
// {
//     arr[i] *= 3
// }

// Map Function
let newArr = arr.map(i=>i*3)
console.log(newArr);
console.log(arr);

// Reduce Function
let FinalValue = arr.reduce((a,b)=>a+b)
console.log(FinalValue);


//Filter Function
let newArr1 = arr.filter((i)=>i%2==0)
console.log(newArr1);
