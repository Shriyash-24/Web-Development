"use strict";
const obj = {
    name: "Rohit",
    age: 20,
    gender: "Male",
    // aadhar: 1234 --> optional property.
};
// Partial makes every property optional.
const obj2 = {
    name: "Rohit",
    balance: 210
};
// Required makes every property required. All property should be filled.
const obj3 = {
    name: "Rohit",
    age: 20,
    balance: 210
};
// We can only read these properties, can't do write operations on them.
const obj4 = {
    name: "Rohit",
    age: 20,
    balance: 210
};
obj4.name = "Shriyash"; // Changes can't be made in obj4.
;
;
const arr = [{ name: "Rohit", age: 20 }, { name: "Shriyash", age: 20 }];
// Function In TS
/*
a:number --> Defining a's type. After function mentioning, :number means I am mentioning its return type.
*/
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
// Return Type Void.
function meet(msg, val) {
    console.log(msg, val);
}
meet("Shriyash", 0);
function neet(msg = "Jit") {
    console.log(msg);
}
neet(); // Jit is printed. [Default]
neet("Bittu"); // Bittu is printed.
// Optional Parameter
function GATE(person) {
    console.log(person || "Preparation Kar Bhai");
}
GATE("Rohit"); // person value --> Rohit is printed.
GATE(); // Optional Message is printed.
// Arrow Function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4)); // 7.
// Call Back Function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// I need to mention callback's type also.
// (amount:number)=>void means that callback's parameter amount has number type and it will return void.
// Rest Parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 3, 1, 4, 123, 1, 12, 10);
;
const obj11 = {
    name: "Shriyash",
    age: 20,
    salary: "chillar",
    id: 123
};
;
