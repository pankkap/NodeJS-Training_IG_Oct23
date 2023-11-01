// JSON: JavaScript Object Notation 


// JSON Syntax
// {
//     "name":"Pankaj",
//     "age":25
// }
// Array of JSON Objects
[
    {"name":"Pankaj","age":25},
    {"name":"Pankaj","age":25},
    {"name":"Pankaj","age":25}
]

// Access of JSON Data 
// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

console.log(data.name);
console.log(data["age"]);


// Conversion of JSON into JS Object
let jsondata = `{"name":"Pankaj", "age":25  }`
console.log(jsondata);

let ObjectJSdata = JSON.parse(jsondata)
console.log(ObjectJSdata);

let transferJSONForrmat = JSON.stringify(ObjectJSdata)
console.log(transferJSONForrmat);
