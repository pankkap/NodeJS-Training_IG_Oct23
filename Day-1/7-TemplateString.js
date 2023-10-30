// variable substitution
let EmpCount = 400
let name = "Ingenuity"
console.log(name + " have " + EmpCount + " Employees");
console.log(`${name} have ${EmpCount} Employees`);


// String Interpolation
function greet(){
    return "hello"
}
console.log( `${greet()} i am from Ingenuity`)

// Expresion Evaluation
let price = 10
let VAT = 0.25
let finalOutput = `Final Price = ${(price + VAT).toFixed(2)}`
console.log(finalOutput);


let multiLine = `Hi I am Pankaj
I am from Chandigarh
I am here in Ingenuity as a Manager L&D`
console.log(multiLine);


// HTML Templates
let tags = ["ES5", "NodeJS", "TypeScript"]
let ulTag = "<ul>"
let html = `${ulTag}`;

for (i of tags)
{
    html += `<li>${i}</li>`
}
html += `</ul>`

console.log(html);
