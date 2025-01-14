// console.log(b); // Directly printing b, b is not defined error

// var x;
// console.log(x); // undefined will be output

// console.log(g); --> cannot access 'g' before initialization.
// let g = 10;

// ---- START -----------------------------------------------

var x = 10;
let y = 20;
const z = 30;
console.log(x,y,z);

// An execution context is created. It contains two parts -
//  First part is memory and second part is code.
// Two phases - Memory and code phase.
// Memory Allocation Step
// Whenever var is there, x:undefined. Key value pair.
// Whenever let,const will be there, memory will be allocated but nothing will be initialized. This is known as temporal dead zone.

// Code Phase.
// var x = 10; --> 10 will be moved to x and undefined will be gone.
// let y = 20; --> 20 will go to y.
// const z = 30; --> 30 will go to z.
// x,y,z will be printed.

// JS is a synchronous single threaded language.
// Single thread --> At one time, only one instruction will be executed. 
// Synchronous means ek ke baad ek. Jaha jane ke liye kaha jayega vahi jayega.


// Let's say this is the code -->
// console.log(x);
// console.log(y);
// var x = 10;
// let y = 20;
// --------------------
// Now execution starts.
// x: undefined.
// y:(nothing)
// Code execution phase.
// console.log(x): --> undefined print hoo gaya because x contains undefined value.
// console.log(y); --> y is not initialized so it throws an error.

// Temporal Dead Zone
// x:undefined
// y:(nothing)
// z:(nothing)
// y and z will remain in temporal dead zone until it is initailzed. Jo bhi variable temporal dead zone mei hota hai, hum usko access nahi kar sakte.


