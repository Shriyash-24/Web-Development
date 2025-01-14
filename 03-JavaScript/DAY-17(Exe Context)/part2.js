// Hoisting in JS is the behaviour where variable and function declaration are moved to the top of their containing scope before the compilation phase, before the code has been executed.
// This means that JS hoists or lifts the declaration, not the assignments to the top.

//Eg --> I have written this code
// var x = 10;
// let y = 10;
// let z = 30;

// declaration part top mei move hoo jata hai. 

var x = undefined;
let y;
let z;
console.log(x); // undefined
// console.log(y); // error marega.

x = 10;
y = 10;
z = 30;
console.log(x); // 10
console.log(y); // 10
