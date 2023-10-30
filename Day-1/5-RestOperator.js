// Rest Operator: Packing data

// function sum(x,y)
// {
//     return x+y
// }
function sum(a,b,...x)
{
    console.log(x);
    let sum = 0
    for (i of x)
    {
        sum += i
    }
    console.log(a,b);
    console.log(x);
    return sum
}

// console.log(sum(1,2));
console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,45,6,7,88,89,9,9,9,7,87));