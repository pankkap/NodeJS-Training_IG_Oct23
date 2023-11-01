// Uses of Proxy
// 1. For Validation
// 2. Read Only view of an Object
// 3. SIde Effect
// 4. Set data/update value of Object 

const student = {
    name:"Manish",
    age:25
}

const handler = {
    get:function(obj, prop)
    {
        return obj[prop]?obj[prop]:"property not exist"
    }
}
const setValueHandler = {
    set:function(obj, prop, value)
    {
        obj[prop] = value
        return
    }   
}

const validator = {
    get(obj, prop)
    {
        if(prop =="name")
        {
            return obj[prop]
        }
        else
        return "not allowed"
    }
}
const readOnlyHandler = {
    set:function(obj,prop, value){
        if(obj[prop])
        {
            console.log("Read Only");
        }
    }
}

const myFunction = ()=>{
    console.log("Execute this function");
}
const sideEfect = {
    set:function(obj, prop, value){
        if(prop ==="name" && value =="admin")
        myFunction()
    else
        console.log("Can only access name property");
    }
    
}
// Syntax 
const proxy = new Proxy(student, sideEfect)
proxy.name = "admin"
proxy.age = 232






