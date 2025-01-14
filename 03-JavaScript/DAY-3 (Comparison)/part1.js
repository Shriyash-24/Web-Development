// Non - Primitive Data Types
// 1) Array.
// 2) Object.
// 3) Function.

// 1. Array --> Array is used to store ordered collection of values.
let arr1 = [10,20,30]; // Instead of creating multiple variables, i can use an array to declare and initialize 3 variables at once. An array is declared with these [] brackets and you can put values in it.

console.log(arr1); // [ 10, 20, 30 ] will be printed in the console.
console.log(typeof arr1); // object will be printed in the console because array in itself is a object.

// 2. Object --> An object is stored in key value pair.
let obj1 = {
    user: "Shriyash",
    account_number: 129348576758439,
    balance: 0
};
// In obj1, user, account_number, balance are the keys and Shriyash,129348576758439,0 are the values for the given keys. To separate different keys and values add comma in between.
console.log(obj1); // { user: 'Shriyash', account_number: 129348576758439, balance: 0 } will be printed on the console.
console.log(typeof obj1); // object will be printed on the console because object's type will be object only.

// 3. Functions --> A block of code that is designed to perform a particular task.
let fun = function(){
    console.log("Hello");
}
// To make a function, use function word followed by () and {} and in {} write whatever you want to write. And this function is stored in fun variable.
console.log(fun()); // Now this function is called inside the console.log. So, now Hello will be printed on the console, and then undefined will also be printed. Undefined is printed because this function does not have a return statement. So, javascript returns undefined.

let fun2 = function(){
    console.log("Hello");
    return 10;
}
console.log(fun2()); // So, now Hello and 10 will also be printed because 10 value is returned.

