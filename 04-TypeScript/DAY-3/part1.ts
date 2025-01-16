interface Person {
    name: string,
    age: number,
    gender: string,
    aadhar?: number // optional property is made because of ?. 
}

const obj: Person = {
    name: "Rohit",
    age: 20,
    gender: "Male",
    // aadhar: 1234 --> optional property.
};

// Utility Types For Objects

interface customer {
    name: string,
    age: number,
    balance: number
}

// Partial makes every property optional.
const obj2: Partial<customer> = {
    name: "Rohit",
    balance: 210
}

// Required makes every property required. All property should be filled.
const obj3: Required<customer> = {
    name: "Rohit",
    age: 20,
    balance: 210
}

// We can only read these properties, can't do write operations on them.
const obj4: Readonly<customer> = {
    name: "Rohit",
    age: 20,
    balance: 210
}

obj4.name = "Shriyash"; // Changes can't be made in obj4.

// Array Of Objects

interface People {name:string,age:number};
interface Manager {salary:number,id:number};

const arr: (People | Manager)[] = [{name:"Rohit",age:20},{name:"Shriyash",age:20}];

// Function In TS
/* 
a:number --> Defining a's type. After function mentioning, :number means I am mentioning its return type.
*/

function greet(a:number):number{
    console.log(a);
    return a+5;
}
console.log(greet(10));

// Return Type Void.
function meet(msg:string,val:number):void{
    console.log(msg,val);
}
meet("Shriyash",0);

function neet(msg:string = "Jit"){
    console.log(msg);
}
neet(); // Jit is printed. [Default]
neet("Bittu"); // Bittu is printed.

// Optional Parameter

function GATE(person?:string){
    console.log(person || "Preparation Kar Bhai");
}

GATE("Rohit"); // person value --> Rohit is printed.
GATE(); // Optional Message is printed.

// Arrow Function

const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(3,4)); // 7.

// Call Back Function

function placeOrder(order:number,callback: (amount:number)=>void):void{

    const amount:number = order+10;
    callback(amount);
}

placeOrder(10,(amount)=>{
    console.log(amount);
})

// I need to mention callback's type also.
// (amount:number)=>void means that callback's parameter amount has number type and it will return void.

// Rest Parameter

function total(...arr:number[]){
    let ans:number = 0;
    arr.forEach((val:number)=>ans = ans+val);
    console.log(ans);
}

total(2,3,1,4,123,1,12,10)

// Extend Keyword
interface human {
    name: string,
    age: number
}

interface Teacher extends human{
    salary: string,
    id: number
};

const obj11:Teacher = {
    name:"Shriyash",
    age: 20,
    salary:"chillar",
    id:123
};

interface BankEmployee extends human {
    salary: string,
    position: string
};