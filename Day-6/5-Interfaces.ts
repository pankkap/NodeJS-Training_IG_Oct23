interface User {
    id: number;
    firstName: string;
    lastName: string;
    getFullName(): string;
  }

interface User2 extends User
{
    city?:string
    address():void
}

  class ABC implements User, User2{
    id: number;
    firstName: string;
    lastName: string;
    
    constructor(id:number, fname:string, lname:string)
    {
        this.id = id;
        this.firstName = fname
        this.lastName = lname
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    } 
    address(): void {
        console.log("Address is there");
    }
}

let obj = new ABC(101, "Pankaj", "kapoor")
console.log(obj.getFullName());



interface Post {
    title: string;
    content: string;
    tags?: string[];
  }