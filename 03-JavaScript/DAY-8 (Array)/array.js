// Arrays --> It is versatile in JS, a dynamic data structure that store ordered collections of values.

const arr = [2,35,1,8,9,"rohit",true];
console.log(arr.length); // Length of the array --> 7.
console.log(arr[5]); // Indexing starts from 0. --> rohit
console.log(arr[-1]); // Undefined

console.log(arr.at(-4)); // At is latest which can take negative index as well. O/P --> 8.

const newarr = arr; // They are stored in heap, and arr's reference is being copied to new arr.
console.log(newarr == arr) // true. Both are pointing to same memory location.

const newarr1 = structuredClone(arr); // Makes a clone which points to different memory locations. It's very helpful.
console.log(newarr1 == arr); // false, because now memory locations are different.
console.log(newarr1); // [ 2, 35, 1, 8, 9, 'rohit', true ]

arr.push(30); // Adds element at the end.
console.log(arr); // [ 2, 35, 1, 8, 9, 'rohit', true, 30 ]

arr.pop(); // Last eleemnt is deleted.
console.log(arr); // [ 2, 35, 1, 8, 9, 'rohit', true ]

arr.unshift(10); // Adds element at the start
arr.unshift(30);
console.log(arr) // [ 30, 10, 2, 35, 1, 8, 9, 'rohit', true ]

arr.shift(); // Deletes element from the start
console.log(arr); // [ 10, 2, 35, 1, 8, 9, 'rohit', true ]

delete arr[0]; // Deletes element of a particular index, it has a disadvantage that it deletes the element but reserves space for it. It creates the hole.
console.log(arr); // [ <1 empty item>, 2, 35, 1, 8, 9, 'rohit', true ]
console.log(arr[0]); // undefined

console.log(arr.indexOf(8)); // First index of the element --> 4
console.log(arr.lastIndexOf(8)); // Returns the last index --> 4
console.log(arr.includes(1)); // Checks if element includes or not. Result gives in true or false. --> true

console.log(arr.slice(2,4)); // Includes 2nd index but does not include 4th index. Extracts a portion of the array without modifying it. --> [ 35, 1 ]
console.log(arr); // [ <1 empty item>, 2, 35, 1, 8, 9, 'rohit', true ]

// Splice --> Method in JS used for modifying an array by adding, removing or replacing elements. It will change the original array.
// Syntax of Splice --> splice(starting_index,total_element_delete,add_value)

console.log(arr.splice(2,4)); // Includes 2nd index but 4 indicates how many elements do you want? Basically 4 means you want to print 4 elements. It will also change your existing array and it will eliminate all the spliced elements. --> [ 35, 1, 8, 9 ]

console.log(arr); // [ <1 empty item>, 2, 'rohit', true ]
arr.splice(2,2,"money",90); // money and 90 is added, but 3 elements is deleted.
console.log(arr); // [ <1 empty item>, 2, 'money', 90 ]

console.log(arr.toString()); // Converts an array to a string --> ,2,money,90

console.log(arr.join("*")); // Uske bich mei comma ki jagah kuch aur dalna. O/P --> *2*money*90.

let arr1 = [2,35,6,11];
let arr2 = [5,12,19,20];
let arr4 = [22,233,2233];
let arr3 = arr1.concat(arr2,arr4); // Concatenating arrays
console.log(arr3); // [ 2, 35, 6, 11, 5, 12, 19, 20, 22, 233, 2233 ]

arr1.push(arr4); // 2D Array Mei Convert hoo gya.
console.log(arr1); // [ 2, 35, 6, 11, [ 22, 233, 2233 ] ]

let arr2d = [[2,3],[3,5],[5,6]]; // Array ke andar array.

let arr2dnew = arr2d.flat(); // Convert into 1D Array. 

console.log(arr2dnew); // O/P --> [ 2, 3, 3, 5, 5, 6 ]
console.log(arr2d[0][1]); // --> 3

let arr3d =  [[1,2,[3,4]],[6,7,8]];
let arr3dnew = arr3d.flat(2); // Goes upto 2 depth and converts to 1D Array. Flat ki default value 1 hoti hai.
console.log(arr3dnew); // [ 1, 2, 3, 4, 6, 7, 8 ]

let abc = [2,1,4,1];
console.log(Array.isArray(abc)); // Array hai ya nahi check karne ke liye

let ac = new Array(2,12,3,4,45); // If you give single value, then array's size will be defined. Generally not used.
console.log(ac); // [ 2, 12, 3, 4, 45 ]

let ac1 = new Array(5); // When we give only one value, it will define the size of the array.
console.log(ac1); // [ <5 empty items> ]
