abstract class Employee
{
    // properties
    protected empId:number;
    protected empName:String
    constructor(id:number, name:string){
        this.empId = id
        this.empName = name
    }
    // method
    abstract details():void
        
}
// let emp1 = new Employee(101, "Sachin")
// let emp2 = new Employee(101, "Sachin")
// emp1.details()
let employees:Employee[] = [];
// employees.push(new Employee(103, "Sakshi"))
// emp2.empId = 102
// emp2.empName = "Manish"
// employees.push(emp2)
// console.log(employees);


// Access Modifier
// 1. public
// 2. private
// 3. protected

class Development extends Employee{
    empSal:number
    constructor(id:number, name:string, sal:number)
    {
        super(id, name);
        this.empSal = sal
    }
    details()
    {
        console.log(`EmpId:${this.empId} \nEmp Name: ${this.empName}`);
    }
    display(){
        console.log(`Emp Salary: ${this.empSal}`);
    }
}

let obj = new Development(101, "Manish", 2323);
obj.details()
obj.display()