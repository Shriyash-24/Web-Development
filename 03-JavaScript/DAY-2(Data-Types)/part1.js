// There are two types of Data Types in JavaScript.
// 1. Primitive Data Types.
// 2. Non-Primitive Data Types.

// ---------------------------------------------------------------

// Primitive Data Types
// 1. Number
// 2. Boolean
// 3. String
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. Bigint

// 1. Number --> It stores integer and floating point numbers.
let account_balance = 80; // A variable account_balance is created with the number 80.
console.log(account_balance); // Now 80 will be printed in the console.
console.log(typeof account_balance); // number will be printed because that is the type of account_balance variable. To find type of any variable, use 'typeof'.

// 2. String --> Represents text enclosed in single/double quotes or backtick.
let str = "Shriyash"; //  str variable is created with Shriyash in it.
console.log(str); // Shriyash will be printed in the console.
console.log(typeof str); // string will be printed because that is the type of str variable.

// 3. Boolean --> Stores either True or False.
let isAdmin = true; // isAdmin variable is created which is written in Camel case, that contains value as true.
console.log(typeof isAdmin); // boolean will be printed in console because that is the type of isAdmin variable.

// 4. Undefined --> A variable that has been declared but not initialized.
let x;
console.log(x); // undefined is printed here. Because x is not initialized yet.
console.log(typeof x); // undefined will be printed in console because that is the type of x variable.

// 5. Null --> A variable that is declared and initialized as null. Null means that the programmer does not want to put a value in the variable intentionally.
let balance = null;
console.log(balance); // null will be printed in bold in the console. Bold indicates that the balance variable contains null itself.
/* V.IMP */ console.log(typeof balance); // object will be printed here and it is the biggest error in JS. It's typeof should've been null, but object will be printed.

console.log(Number.MAX_SAFE_INTEGER); // 90071992574740991 will be printed. Because this is the maximum safe integer you can store in let. MAX_SAFE_INTEGER means maximum safe integer you can store and you have to apply Number. in the beginning to use this.

/* Question: What if I want to store a bigger number? */

// 6. Bigint --> You can store a bigger integer using this.
let num = 900719925445653094586293485n; // To store a bigger number, in the end of the number, i have to use 'n'.
console.log(num); // 900719925445653094586293485n will be printed with the n. 

// 7. Symbol --> It will be discussed later.

// ------------------------------------------------------------------------------------------------

// A number is stored in 64 bit format, an allocation to memory in javascript.
let a = 1234567895234569765488367; // Let's assume that a variable takes 68 bit memory so now some data might get lost from the memory. That's why bigint data type was invented to prevent this memory loss.

// ------------------------------------------------------------------------------------------------



