// ES6 Approch for creating class and Objects

class Person
{
    constructor(name, age){
        // properties | data Members
        this.name = name
        this.age = age
    }

    // Methods | Member Functions

    details(){
        return `Name: ${this.name} & Age: ${this.age}`    
    }
}
// Objects
// let obj1 =  new Person("Anshika", 34)
// let obj2 =  new Person("Manish", 24)

// console.log(obj1.details());
// console.log(obj2.details());


class Ingenuity extends Person
{
    constructor(name, age, Count)
    {
        super(name, age)
        this.Count = Count
    }
    display(){
        console.log("Company Count", this.Count);
    }
}

let obj = new Ingenuity("Pankaj", 45, 400)
console.log( obj.details())
obj.display()