// Math Objects --> JS provides math object for advanced mathematical operations.

console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046
console.log(Math.PI); // 3.141592653589793

console.log(Math.round(4.6)); // 5, round off to nearest integer.
console.log(Math.floor(4.9)); // 4, round off to lower integer.
console.log(Math.ceil(4.1)); // 5, round off to higher integer.

console.log(Math.random()); // it will generate a random value between 0 and 1. [0<=value<1]
console.log(Math.random() * 10); // it will generate a random value between 0 and 10. [0<=value<10]
console.log(Math.floor(Math.random() * 10)); // it generate 0,1,2,3,4,5,6,7,8,9.

console.log(Math.ceil(Math.random() * 10)) // it generate 1,2,3,4,5,6,7,8,9,10.

console.log(Math.floor(Math.random() * 10) + 1); // it generate 1,2,3,4,5,6,7,8,9,10.

console.log(Math.floor(Math.random() * 10) + 11); // it generate 11,12,13,14,15,16,17,18,19,20.

// Generalized Formula
let min = 40;
let max = 50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it generate 40,41,42,43,44,45,46,47,48,49,50.

// max - min + 1 --> kitne number generate karna
// + min --> kitne number shift karna.