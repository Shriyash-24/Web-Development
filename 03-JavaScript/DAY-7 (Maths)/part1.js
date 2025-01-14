let num1 = 231;
let num2 = new Number(231); // New way of creating a number.
console.log(typeof num2); // object
let num3 = new Number(231);
console.log(num1 == num2); // true because num2 gets converted to number type and then they are compared.
console.log(num2 == num3) // false because they are objects and they will be compared based on address, and address are not same.

// Number Properties
let num = 231.689;
// toFixed() --> formats a number with a fixed number of decimal places.
console.log(num.toFixed(1)); // 231.7 becuase it will round off the number to 1 decimal place.
console.log(num.toFixed(2)); // 231.69 becuase it will round off the number to 2 decimal place.

// toPrecision() --> formats a number to a specified length.
console.log(num.toPrecision(1)); // 2e+2 because it will round off the number to 1 digit.
console.log(num.toPrecision(2)); // 2.3e+2 because it will round off the number to 2 digits.
console.log(num.toPrecision(3)); // 232 because it will round off the number to 3 digits.
console.log(num.toPrecision(4)); // 231.7 because it will round off the number to 4 digits.

// toString() --> returns a number as a string.
console.log(num.toString()); // 231.689, returns as a string.

// toExponential() --> returns a string, with a number rounded and written using exponential notation.
let num89 = 12345.6789;
console.log(num89.toExponential(2)); // 1.23e+4
