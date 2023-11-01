function greeting(message) {
    return (name)=>{
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('John')); // Hi John
 console.log(sayHello('John')); // Hello John