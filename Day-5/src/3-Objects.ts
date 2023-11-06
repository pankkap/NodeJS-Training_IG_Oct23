// Implicit
let person = {
    name:'manish',
    age:35,
    wfh:true
}

person = {
    name:'sahich',
    age:25,
    wfh:false,
}

// Explicit
let project:{
    loc:number,
    proName:string,
    isComplete:boolean
}

project = {
    loc : 123,
    proName:'Game1',
    isComplete:false,
}

let data1:object;
data1 = {x:323,y:454}
// console.log(data1.x);
console.log((data1 as any).x);




