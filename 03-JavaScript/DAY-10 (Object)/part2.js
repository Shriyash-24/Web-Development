// Common Methods For Objects

let obj25 = {
    name: "Rohit",
    age: 30,
    bal: 420,
    gender: "Male"
};

// If I want keys for this object then what will I do?

const arr25 = Object.keys(obj25); // this will return you an array
console.log(arr25); // O/P --> [ 'name', 'age', 'bal', 'gender' ]

// What if you want values?

const arr26 = Object.values(obj25);
console.log(arr26); // O/P --> [ 'Rohit', 30, 420, 'Male' ]

// If you want both keys and values in an array format.

const arr27 = Object.entries(obj25);
console.log(arr27); // You will get 2D array. 
/* [
  [ 'name', 'Rohit' ],
  [ 'age', 30 ],
  [ 'bal', 420 ],
  [ 'gender', 'Male' ]
] */

// Assign --> Copies properties from one object to another object.

const obj35 = {a:1,b:2};
const obj36 = {c:3,d:4};

// Now, I want to combine two objects. 

// const obj3 = obj1+obj2 --> YOU CANNOT DO IT LIKE THIS!

// const obj37 = Object.assign(obj35,obj36);
// You can use this but this method will change object 35 also. Object 36 won't be changed. 

// The first value would be the source and it will considered as target where value will be changed. So write a empty object there instead.

const obj37 = Object.assign({},obj35,obj36); // The brackets represent the empty target where values would be used to change.
console.log(obj37); // { a: 1, b: 2, c: 3, d: 4 }

// Assign creates a deep copy, so changes are not reflected in the first object.

// Spread Operator --> Creates a shallow copy.

const obj45 = {...obj35,...obj36};
// Ek object hai toh usse pura kholdo bhai aur phir usko combine karke single object ban gya hai. This can be used to combine the objects. 
console.log(obj45); // { a: 1, b: 2, c: 3, d: 4 }

// Freeze & Seal.
// Freeze --> Completely freezes an object, making it immutable. You can't add, delete or modify the properties of the object.

let shri = {
    name: "Alice",
    age: 25
}
Object.freeze(shri);
shri.age = 30; // Ignored. In strict mode, it will throw an error.
shri.address = "Delhi"; // Ignored. In strict mode, it will throw an error.
delete shri.name; // Ignored. In strict mode, it will throw an error.
console.log(shri); // { name: 'Alice', age: 25 }

// Seal --> You can't add or delete properties but you can modify the properties.

let shri1 = {
    name: "Alice",
    age: 25
}
Object.seal(shri1);
shri1.age = 30; // Allowed.
shri1.address = "Delhi"; // Ignored. In strict mode, it will throw an error.
delete shri1.name; // Ignored. In strict mode, it will throw an error.
console.log(shri1); // { name: 'Alice', age: 30 }