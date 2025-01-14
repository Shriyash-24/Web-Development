// Question: Largest and smallest number in 3 bits.
// 111 --> 7 [Largest]
// 000 --> 0 [Smallest]

// Question: How negative numbers are stored?

// Here, sign bit is considered as the first bit.
// In sign bit, 0 --> Positive Number.
//              1 --> Negative Number.

// Question: How negative numbers will be stored considering the sign bit?
// Largest Number ->  011 [Answer: 3] (As first bit is 0, means the number is positive.)
// Smallest Number -> 111 [Answer -3] (As first bit is 1, means the number is negative.)

// Eg - 100 --> That would be zero, with the 1 as sign bit.
// Eg - 000 --> That would be zero, with the 0 as sign bit.
/* V.IMP: This is known as Two Representation of Zero. */

// In 3 bits, the maximum number you can store would be 8 (2 power 3)
// 4 positive --> {0,1,2,3}
// 4 negative --> {0,-1,-2,-3}

// The positive numbers we can store is (2^3-1 -1) = (2^2 -1).
// The negative numbers we can store is -(2^3-1 -1) = (2^2 -1).

// In 64 bits, first bit is sign bit, 11 bits are exponent bits and 52 bits are mantissa bits.

// Eg - 42.75 is to be stored in 64 bit format.
// (42.75)₁₀ = (101010.11)₂ from decimal to binary.
// Move the decimal to left side, until leftmost 1.
// Term => 1.0101011 x 2^5. 2^5 is multiplied because i have shifted the decimal place 5 times.

// After the decimal part, whatever numbers are there will be stored in the mantissa part.
// Mantissa Part => 01010110000000000...

// So in the 'Term', the exponent part is 5 (2^5). So now add 1023 to the value. 1023 + 5 = 1028. Now convert 1028 to binary --> 100000000100 and this value is our exponent part.

// By default 1. part which was present in 'Term' is by default considered by JavaScript and no bits are used on it. So now we get 53 bits to store in mantissa part even though we have 52 bits only allocated for mantissa part.
// Total values we can store in Mantissa --> 
// 2^53 - 1 [Largest] [Largest value is MAX_SAFE_INTEGER which was 9007199254740991]
// -(2^53 - 1) [Smallest] [Smallest value is MIN_SAFE_INTEGER which was -9007199254740991]

/* Question: Why the following approach was not used? */
// First bit is sign bit and all number value in 63 bits would be present. So we can store 2^63 - 1 values this way.
// It was not used, because I can't store values like 0.75, 0.23 etc.

/* Question: Why we add 1023 to the exponent value? */
// JavaScript decided to drop the concept of sign bits in exponent section because exponents can be positive or negative also.
// Exponent has 11 bits so I can store 2^11 values. So positive numbers I can store would be 1023 can negative numbers I can store would also be 1023.
// Now, they decided to add 1023 to negative values --> -1023 + 1023 = 0. So negative numbers start from 0.




                                            