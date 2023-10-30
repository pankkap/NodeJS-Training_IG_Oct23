let arr = [1,2,3,4,5]
// let [a,b,c,d,e] = arr
// console.log(a,b,c,d,e);
// Selective Destructuring
let [a,b,,,e] = arr
console.log(a,b,e);

let person = {
    name:'Pankaj',
    mobile:13232,
    email:'pankaj@abc.com',
    city:{
            pincode:23232,
            street:'abc'
    }
}

// destructure Object
let { name, mobile, email} = person
let {pincode, street} = person.city

console.log(name);
console.log(mobile);
console.log(email);
console.log(pincode);
console.log(street);