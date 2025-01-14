// Type Conversions
// 1. String to Number.

// a) First Method.
let account = "100";
let num = Number(account); // Number() is a global method used to convert a string to a number.
console.log(typeof num); // So type of num will be number.

// b) Second Method.
let account2 = "";
let num2 = Number(account2);
console.log(num2); // So an empty string is converted to a number 0. 0 will be printed on the console.

// c) Third Method.
let account3 = "Shriyash";
let num3 = Number(account3);
console.log(num3); // A string where letters are written can't be converted to a number. This gives NaN (Not a Number) value.

// d) Fourth Method --> Unary + Operator
let account4 = "100";
let num4 = + account4;
console.log(num4); // num4 would become 100 as a number.
console.log(account4); // This is 100 as well but it's typeof is string.

// Unary + operator can't convert strings like "Shriyash" so it will convert it to NaN (Not a number).

// 2. Number to String
// The global method String() is used to convert numbers into strings.
// The number method toString() does the same.
let mun = 4;
let dum = String(mun);
console.log(dum); // Will give 4 as a string.
let yum = String(4 + 5); // expression
console.log(yum); // Will give 9 as a result of an expression in a string.

// 3. Boolean to Number
let x = true;
console.log(Number(x)); // true --> 1 as a number.
let y = false;
console.log(Number(y)); // false --> 0 as a number.

// 4. Number to Boolean
let x1 = 1;
console.log(Boolean(x1)); // will give me true as a boolean.
let x2 = 0;
console.log(Boolean(x2)); // will give me false as a boolean.
let x3 = 8;
console.log(Boolean(x3)); // Every non zero value is true, so even 8 is converted to true.

// 5. Null Conversions
let n = null;
console.log(Number(n)); // Null is converted to 0.
console.log(String(n)); // null is printed, which is a string.
console.log(Boolean(n)); // false is printed.

// 6. Undefined Conversions
let u;
console.log(Number(u)); // NaN is printed. Not a Number is printed.
console.log(String(u)); // undefined is printed as a string.
console.log(Boolean(u)); // false is printed as boolean.

// 7. String to Boolean
let str = "hi";
console.log(Boolean(str)); // true is printed as boolean to any string.
let str1 = "";
console.log(Boolean(str1)); // false is printed because it's empty string.

// 8. Boolean to String
let bool1 = true;
console.log(String(bool1)); // true is printed as a string.
let bool2 = false;
console.log(String(bool2)); // false is printed as a string.
