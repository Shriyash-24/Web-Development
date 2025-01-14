// An object is a collection of key-value pairs, where the keys are called properties (or methods if their values are functions). Objects are one of the fundamental building blocks of JS and are used to represent real world entities, store data and organize code in a structured manner.

// How to create object.
const obj = {
    name: "rohit",
    // name is key, rohit is value.
    acc_bal: 420,
    gender: "Male",
    0:20,
    undefined: 30,
    null:"mohan"
}
console.log(obj); /* O/P --> {
    '0': 20,
    name: 'rohit',
    acc_bal: 420,
    gender: 'Male',
    undefined: 30,
    null: 'mohan'
  }
*/
// keys are stored in strings only.

const arr = ['rohit',420,"Male",30];
// It gets difficult to know about elements of the array. That's why objects are created. Because array ka jo index vo 0,1,2.. hii hoga while objects ka index keys pe depend karta hai!

const inst = {
    insta_id: "rohit_negi",
    password: "Bhaiyaji9"
}
console.log(inst); // Print the inst. { insta_id: 'rohit_negi', password: 'Bhaiyaji9' }

console.log(typeof obj); // type object hii hoga

// In keys, we can't use space because a key is stored in backend as a string.

// Accessing objects.

console.log(obj.name); // O/P --> rohit

console.log(obj["gender"]); // Another method to access. If you use square bracket, use strings to the keys. You need to mention that it is a string.

// I can give spaces in keys, use strings to give spaces in keys. Those keys with spaces, we can't access them with dot operator, use square brackets there.

// Can i give name of key as a 0 or any number, yes it will be stored as string.
console.log(obj['0']);

// A number can be accessed even without giving as string.
console.log(obj[0]);

// Arrays stores in key value only.
// Object and Arrays have the same implementation because they can be accessed the same way. And hence they have same type as object.

const arr1 = [20,50,70];
console.log(arr1.length, obj.name);

// Internal implementation of array -
// const arr = {
//     0:20,
//     1:50,
//     2:70;
// }
// Stored the same way.

// Can key be named undefined?

console.log(obj[undefined]);
console.log(obj.null);
// Yes they can be accessed in all the ways, because they are just strings.

// Another way to create object?

const person = new Object();
// I can add properties, delete, or modify properties.

// Property addition
person.name = "Rohit";
person.age = 80;
person.gender = "Male";
console.log(person); // O/P --> { name: 'Rohit', age: 80, gender: 'Male' }

// Delete
delete person.age;
console.log(person); // O/P --> { name: 'Rohit', gender: 'Male' }

// Modify
person.name = "Mohit";
console.log(person); // O/P --> { name: 'Mohit', gender: 'Male' }

// Class and Constructor method to access objects. [OOPS]

class People{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// this --> is pointing to it's instance. this keyword points to whoever it is called by.

let per1 = new People("Rohit",20,"Male");
console.log(per1); // O/P --> People { name: 'Rohit', age: 20, gender: 'Male' }

// Constructor means to create something or memory allocate karna. Rohit got passed in name, 20 got passed in age and Male got passed in gender.
// When you do new People for per2 then you say that an instance will be created.
// We can add many instances of people this way and we do not repeat the code this way. 

let per2 = new People("Mohit",30,"Male")
console.log(per2); // O/P --> People { name: 'Mohit', age: 30, gender: 'Male' }

// ----------------------------
