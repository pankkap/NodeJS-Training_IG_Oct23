// What is Promise?   
// Promise is an Object that returns a value that hope to recieve in future
// Promise has three States
// 1. Pending state
// 2. Fullfill State (resolve)
// 3. Reject state (reject)

// Use of Promises - > API Call

function sayHi(){
    return new Promise((resolve, reject)=>{
        const err = true;
        if(!err)
        {
            resolve("Ok. Mohmdd. Lets Meet")
        }
        else
        {
            reject("Sorry I am Busy")
        }
    })
}

// console.log(sayHi())

// Lets understand how to consume or Handle the promise concept

sayHi()
.then(data=>console.log(data))
.catch(err=>console.log(err));


