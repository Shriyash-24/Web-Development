// Arithmetic Operators --> +,-,*,/,% operators.
let x = 10, y = 2;
console.log(x + y); // 12 will be printed.
console.log(x - y); // 8 will be printed.
console.log(x * y); // 20 will be printed.
console.log(x / y); // 5 will be printed (Whenever required, even float will be printed.)
console.log(x % y); // 0 will be printed which is the remainder when you divide x and y.

// Order Precendence
console.log(6*3+8-9) // Answer is 17.
console.log(6*((3+8)-9)); // Answer is 12.
// WHY?
// Order Of Priority.
// First Multiply,Divide,Modulus will happen, if operators exist, it is calculated left to right.
// After that Addition, Subtraction will happen.

// Increment & Decrement --> Increasing or decreasing values by 1.
let sum = 20;
console.log(sum++); // 20 is printed in the console, then sum's value will change to 21.
console.log(sum--); // 21 is printed in the console, then sum's value will change to 20.
console.log(++sum); // Sum's value is changed to 21, then 21 is printed in the console.
console.log(--sum); // Sum's value is changed to 20, then 20 is printed in the console.

// Exponentiation
let expo = 2;
console.log(expo**sum); // 2^20 --> 1048576
console.log(sum**expo); // 20^2 --> 400

// Assignment Operators
let h = 5; // 5 is assigned to h.
h+=4; // h = h + 4, so h becomes 9.
h-=4; // h = h - 4, so h becomes 5.
h*=2; // h = h * 2, so h becomes 10.
h/=2; // h = h / 2, so h becomes 5.
h%=2; // h = h % 2, so h becomes 1 [1 is the remainder]
h**=2; // h = h**2 --> so h becomes 1. [1^2 = 1]

// Comparison Operators
let a1 = 10;
let a2 = 20;
console.log(a1==a2); // false because 10 is not equal to 20.
console.log(a1>a2); // false because 10 is not greater than 20.
console.log(a1<a2); // true because 20 is greater than 10.
console.log(a1>=a2); // false because 10 is less than 20.
console.log(a1<=a2); // true because 20 is greater than 10.

// String & Number Manipulations
let num = 10;
let str = "10";
console.log(num==str); // str is converted to number and hence true is returned.
console.log(num=="20"); // 20 is converted to number 20 and 10==20 which is false and hence false is returned.
str = "20x";
console.log(num<str); // false because str is converted to NaN.

str = "10";
console.log(num===str); // false is returned. 10 is a number and "10" is a string. '===' operator is used to check types. So they are not of same type, hence false is returned.
let num2 = 10;
console.log(num===num2); // true is returned because both are numbers.

// Null & Undefined Manipulations

let y1 = null; // y1 is null
let y2; // y2 is undefined
console.log(y1 == y2); // true because null == undefined. 
console.log(y1 === y2); // false because null === undefined is not true because they have different types. Null's type is object and undefined has undefined type.

/* V-IMP: Null is only equivalent to undefined. (null==undefined) */

console.log(y1 == 0); // null == 0 is false, because null is only equivalent to undefined.
console.log(y1 < 0); // y1 is converted to 0, but 0 < 0 is still false.
console.log(y1 > 0); // y1 is converted to 0, but 0 > 0 is still false.
console.log(y1 <=0); // y1 is converted to 0, but 0 <= 0 is true.
console.log(y1 >= 0); // y1 is converted to 0, but 0 >= 0 is true.

let z1 = "s1";
let z2 = "s2";
console.log(Number(z1) == Number(z2)); // NaN == NaN --> False.

let g1; // g1 is undefined variable. Which is NaN.
console.log(g1 == 0); // false because undefined is not equal to 0.
console.log(g1 < 0); // false because undefined is not less than 0.
console.log(g1 > 0); // false because undefined is not greater than 0.
console.log(g1 <= 0); // false because undefined is not less than or equal to 0.
console.log(g1 >= 0); // false because undefined is not greater than or equal to 0.

let str3 = "rohit";
let str4 = "mohit";
console.log(Number(str3) == Number(str4)); // NaN == NaN --> False.

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1 == abc2); // true because 123 == 123 [123 is converted to number]
// If we compare abc2 and abc3 we will get true only.
console.log(abc1 == abc2 == abc3); // false because abc1 == abc2 is true but true == abc3 is false. True is basically 1 and false is 0. So 1 == 123 is false.
