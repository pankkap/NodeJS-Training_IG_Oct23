let newHires = [
    {name:"manish", desg:"developper"},
    {name:"sachin", desg:"tester"},
    {name:"Nisha", desg:"intern"}    
]

function display(){
    setTimeout(() => {
        var str = ""
    newHires.forEach(element => {
            str += element.name + " "
    });
    console.log(str);
    }, 1000);
}

function Joining(obj, callback)
{
    setTimeout(() => {
        newHires.push(obj)
        console.log("New Hire has Joined"); 
        callback()
    }, 2000);
}

var newHire = {name:"Ahsan", desg:"Sr. Developer"}

Joining(newHire, display)
