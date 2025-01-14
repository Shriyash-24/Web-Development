// Functions are resuable block of code that perform specific task. A function is defined with the function keyword, followed by the name, parenthesis and a block of code.

function greet(){
    console.log("Hello coder army");
    console.log("mei badiya hu");
    console.log("Aur kya chal raha\n");
}

// Function ko call karna padega to execute code inside it.
greet();

// Addition of 2 numbers.

function sum(number1,number2){
    console.log(number1+number2);
}
sum(3,4); // 7
sum(10,15); // 25
// number1 and number2 are parameters and 3,4 are arguments. Arguments are passed in parameters and here, 3 is passed in number1 and 4 in number2 and then addition is performed.

// Multiply

function multiply(number1,number2){
    return number1*number2;
}
// Mei function ki value ko return bhi karwa sakta hu. 

console.log(multiply(4,5)); // O/P --> 20

// I can store as well.
let result = multiply(5,6);
console.log(result);

// There is no need to give datatype in parameters.

const fun1 = function(){
    console.log("Hello");
    console.log("Hi");
    return "Money"
}

// I can store entire function in fun1 directly. Pura ka pura function store kar diya. This is called function expression.
// fun1 store in heap and reference stack mei hoga.
fun1(); // call kar diya

console.log(fun1); // [Function: fun1]
console.log(fun1()); // When you call Hello, Hi, Money you will get. If you don't have a return statement undefined is printed.

// Arrow Function
const fun = ()=>{
    console.log("Hello");
}
fun();
// Basically function likhne ki jarurat hii nahi.

// Addition Arrow Function

const addition = (number1,number2)=>{
    return number1+number2;
}
console.log(addition(3,4)); // O/P --> 7

const add = (number1,number2) => number1 + number2;
console.log(add(4,4)); // O/P --> 8

// If we have single line of code, return bhi likhne ki jarurat nahi. Ek hii line mei function ban gya.

// Cube Function
const cube = function(number){
    return number*number*number;
}
console.log(cube(8));

// Cube Arrow Function
const cube1 = (number) => number*number*number ;
console.log(cube1(8));

// When you have a single parameter, bracket bhi likhne ki jarurat nahi.

const cube2 = number => number*number*number;
console.log(cube2(8));

// Now i don't know my parameters. I can have many arguments. 

const sum3 = function(...number){ // Very useful, it collects all the arguments in an array.
    // for loop lagake sum nikal sakta hu.
    let sum = 0;
    for(let i=0;i<number.length;i++){
        sum+=number[i];
    }
    console.log(sum);
}
sum3(2,3,4); // 9

// Function Destructuring.

let obj1 = {
    name: "Rohit",
    age:30,
    amount:40
};
// I want only name and amount.

// 1st method

function normal(obj1){
    console.log(obj1.name, obj1.amount);
}
normal(obj1);

// 2nd method
function destructure({name,amount}){
    console.log(name,amount); // Now you can use name, amount directly.
}
destructure(obj1); // obj1 will be passed, then name and amount is destructured and then I am using it.