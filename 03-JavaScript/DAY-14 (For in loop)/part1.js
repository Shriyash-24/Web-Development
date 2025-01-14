let obj = {
    name: "rohan",
    age:23,
    gender: "Male",
    city: "kotdwar"
};

// For in loop, I can iterate over enumerable properties (keys) in an object.

for(let key in obj){
    console.log(key); // Will print all the keys.
    console.log(key, obj[key]); // Will print keys with its values.
}

// Object.keys(obj)
console.log(Object.keys(obj)); // Will print keys. Eg - [ 'name', 'age', 'gender', 'city' ]

let obj2 = Object.create(obj); // creates obj2 with obj as its prototype
obj2.money = 420; // Adds a new property to obj2.
obj.id = "Roh"; // Adds a new property to obj.
console.log(obj2); // {money:420}
console.log(Object.keys(obj2)); // will print [ 'money' ]

for(let key in obj2){
    console.log(key); // sari keys ka access hoga. Inherit walo ka bhi hota hai.
}

// Object inherits its properties from Object.prototype jaise ki toString vagera. Toh vo print kyu nahi hoo raha.
// Go to next file to know more..