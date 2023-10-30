// Unpacking of the data
let arr1 = [1,2,3]
let arr2 = [4,5]

// let arr = arr1.concat(arr2)
let arr = [...arr1,...arr2 ]
console.log(arr);


let data = [...arr1]
data.push(5)
console.log(data);
console.log(arr1);