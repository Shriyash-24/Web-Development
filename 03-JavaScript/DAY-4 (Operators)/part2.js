// Logical Operators
// There are three types: AND [&&], OR[||], NOT[!]

// LOGICAL AND --> 0 && 0 --> 0, 0 && 1 --> 0, 1 && 0 --> 0, 1 && 1 --> 1

console.log(5>3 && 3<8) // true because both conditions are true.
console.log(5>3 && 3>8) // false because one of the conditions is false. If one of the conditions is false then false is returned.

// LOGICAL OR --> 0 || 0 --> 0, 0 || 1 --> 1, 1 || 0 --> 1, 1 || 1 --> 1

console.log(5>3 || 3<8); // true because one of the conditions is true. If one of the conditions is true then true is returned.
console.log(5<3 || 3>8); // false because both conditions are false. If both conditions are false then false is returned.

// LOGICAL NOT --> !0 --> 1, !1 --> 0
console.log(!5>3); // false because the condition is true. If the condition is true then false is returned.
console.log(!5<3); // true because the condition is false. If the condition is false then true is returned.

let age = 18;
let money = 842;
console.log(age>=18 && money>2000); // false because money is less than 2000.
console.log (age>19 || money>200); // true because money is greater than 200.

// Bitwise Operators
// There are six types: AND [&], OR [|], XOR [^], NOT [~], LEFT SHIFT [<<], RIGHT SHIFT [>>]
// Bitwise AND --> 0 & 0 --> 0, 0 & 1 --> 0, 1 & 0 --> 0, 1 & 1 --> 1
console.log(4&5); // 4 is 100 and 5 is 101. So, 4&5 is 100 which is 4.
console.log(5&3); // 5 is 101 and 3 is 011. So, 5&3 is 001 which is 1.

// Bitwise OR --> 0 | 0 --> 0, 0 | 1 --> 1, 1 | 0 --> 1, 1 | 1 --> 1
console.log(5|3); // 5 is 101 and 3 is 011. So, 5|3 is 111 which is 7.
console.log(11|14); // 11 is 1011 and 14 is 1110. So, 11|14 is 1111 which is 15.

// Bitwise XOR --> 0 ^ 0 --> 0, 0 ^ 1 --> 1, 1 ^ 0 --> 1, 1 ^ 1 --> 0
console.log(5^3); // 5 is 101 and 3 is 011. So, 5^3 is 110 which is 6.
console.log(5^7); // 5 is 101 and 7 is 111. So, 5^7 is 010 which is 2.

// Bitwise NOT --> ~0 --> 1, ~1 --> 0
console.log(~5); // -6, it's a two's complement of 5. It's a shortcut method.

// Bitwise LEFT SHIFT
console.log(5<<1); // 5 is 101. So, 5<<1 is 1010 so here 0 was added to the right side and hence 10 is the answer.
console.log(8<<3); // Formula: a<<b = a*2^b. So, 8<<3 is 8*2^3 = 8*8 = 64.

// Bitwise RIGHT SHIFT
console.log(5>>1); // 5 is 101. So, 5>>1 is 010 so here 0 was added to the left side and hence 2 is the answer.
console.log(8>>3); // Formula: a>>b = a/2^b. So, 8>>3 is 8/2^3 = 8/8 = 1.

