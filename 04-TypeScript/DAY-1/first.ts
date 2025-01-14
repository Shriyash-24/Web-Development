let a:number = 10;
let b:number = 20;

a = "Rohit"; // Will show you error. But it will still get converted to JS file.

// Valid JS Code gets converted but TS will show errors.

// Number
let c:number = 1;

// String
let str:string = "Rohir";

// Boolean
let isExist:boolean = true;
isExist = "Shri"; // Error, TS will give errors. 

// Bigint
let bignumber:bigint = 1234567345676543n; // It will convert, but bigint came in ES2020 so it will show you that bigint came in ES2020 then go into config file and set target value.

// Null & Undefined
let abc:null = null;
let bcd:undefined = undefined;
bcd = "Mohan"; // Error. 


let honey:number = 20;