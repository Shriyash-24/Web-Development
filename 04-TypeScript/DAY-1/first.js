"use strict";
let a = 10;
let b = 20;
a = "Rohit"; // Will show you error. But it will still get converted to JS file.
// Valid JS Code gets converted but TS will show errors.
// Number
let c = 1;
// String
let str = "Rohir";
// Boolean
let isExist = true;
isExist = "Shri"; // Error, TS will give errors. 
// Bigint
let bignumber = 1234567345676543n; // It will convert, but bigint came in ES2020 so it will show you that bigint came in ES2020 then go into config file and set target value.
// Null & Undefined
let abc = null;
let bcd = undefined;
bcd = "Mohan"; // Error. 
let honey = 20;
