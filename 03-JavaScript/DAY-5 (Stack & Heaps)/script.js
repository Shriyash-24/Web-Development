// Primitive Data Type is Immutable (Change nahi kar sakta)
// Non-Primitive Data Type is Mutable (Change kar sakta hu)
let a = 10;
let b = a;
console.log(b); // 10
b = 30;
console.log(a); // 10
console.log(b); // 30

// So here I changed the value of b, but it can't be changed because vo toh immutable hai.

let obj1 = {
    id:20,
    name:"Shriyash"
};
let obj2 = obj1;
obj2.id = 30;
console.log(obj1.id); // 30
console.log(obj2.id); // 30
// Even though I did not change obj1, but still it got changed.

// Stack & Heap Memory

// For example if we take sugar bags then either we can store in our shop as a stack or in haywire form as a heap.
// Stack mei primitive data types ki values store hoti hai [call by value] and Heap mei non-primitive data types ki values store hoti hai [call by reference]. Stack mei non-primitive data types ki reference [memory location] store hoti hai.

// Eg -->
let x = 10; // x = 10 stack mei push hua
let y = 30; // y = 30 stack mei push hua
let z = x; // z = x = 10 stack mei push hua [not relevant after below line]
z = 50; // z = 50 stack mei push hua and new memory location mei 50 store hua
// Why new location? Let's say z = 50 required more memory than 10 then i will have to shift the entire memory, so it will be stored in new location.

// Stack memory is very less, heap memory is very large.
// Let's say I have a movie, and I delete it then reference will be deleted but the movie will still be there in the heap memory. The movie will be deleted when it is overwritten by some other file.


