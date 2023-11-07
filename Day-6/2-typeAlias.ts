type NS = number|string
type objwithNU = {name:string, uid:NS}

const loginDetails = (uid:NS, item:string)=>{
    console.log(`${item} has uid of ${uid}`);
}
const greet = (user: objwithNU)=>{
    console.log(`hi ${user.name}`);
}