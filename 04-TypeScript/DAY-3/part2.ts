class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    greetings():void{
        console.log(`Hi ${this.name}`);
    }
}

const obj1 = new Person("Rohit",20);
const obj10 = new Person("Nitin",11);
console.log(obj1);
console.log(obj10);
console.log(obj1.name);
obj1.greetings();

// Public, Private, Protected

class Customer {
    public name:string,
    private age:number,
    protected balance:number;

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meeing():void{
        console.log(this.age); // I can use age inside contructor.
    }
}

const P1 = new Customer("Deepak",20,420);
console.log(P1.name); // I can use it outside contructor.
console.log(P1.age); // I can't use this because it's private, it's outside constructor.
console.log(P1.balance); // I can't use this outside because it's protected.

// Protected & Private is used to avoid having any accidental changes.

class Employee extends Customer {
    // Inherited Customer's Properties.

    salary:number; // Only initialized salary.

    constructor(salary:number,name:string,age:number,balance:number){ // I had to initialize the properties I am using.

        super(name,age,balance); // called customer's contructor.
        this.salary = salary;
    }

    sitting():void{
        console.log(this.name); // name is public so I can use it in another class also.
        console.log(this.age); // Age is private, can't be accessed in another class or outside class.
        console.log(this.balance); // I can use this in child class, protected is accessed via child classes.
    }

    meeting():void {
        console.log("Eat Vegetables");
        return 10;
    }
}

const E1 = new Employee(420,"Rohit",20,30);
console.log(E1.meeting()); // Execution of child meeting.
console.log(E1.name); // Yes we can call this!
console.log(E1.age); // No, age is private.
console.log(E1.balance); // No, balance is protected.
console.log(E1.salary); // Yes we can use this!

// Generics
/* 
Generics in TypeScript allow you to create flexible,
reusable components by enabling you to specify types as parameters in functions, classes, interfaces, and other constructs. This helps provide type safety while keeping the flexibility to work with various data types.
*/

function value(a:number):number{
    return a;
}

console.log(value(10));
console.log(value("Rohit")); // Can't pass string.
console.log(value([10,11,12,12])); // Can't pass arrays.

// One way to handle this is -->
// function value(a:(number | string | number[])):(number | string | number[]) 

// But if I want to do something else, this will fail for that cases.

function values<T>(a:T):T{
    return a;
}

console.log(values(10)); // T will change type to number according to what I am passing.
// Whatever I will pass, it will change itself.
console.log(values(["Mohan","Rohan"])); // T will become whatever I am passing.

console.log(values<number>(10)); // I can explicity declare that I am passing a number but you don't need to mention it. 

// Interfaces Has Templates.

interface Admin<T,U> {
    name: string,
    age: number,
    adhar:T,
    salary: U
}

const obj20: Admin<number,number> = {
    name:"Rohit",
    age: 20,
    adhar: 123
    salary:234
}

const obj21: Admin<string,number> = {
    name: "Rohit",
    age:20,
    adhar: "1234",
    salary:2345
}