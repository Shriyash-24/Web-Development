// This keyword in JS is a special keyword that refers to the context in which current code is being executed. 
// It's value depends on how function where this is used is called.

// Global Scope: this keyword points to global context.
// In Node.js: Module's export object. [empty object]
let a = 10;
const b = 20;
var c = 20;
console.log(this==window) // true
console.log(this.c) // 20

function name(){
    // global scope ka part nahi hoo sakta.
    console.log("Hello Coder Army");
}

// Inside a function
// Non - Strict Mode - When this is used inside a regular function, it refers to global object.
// Strict Mode - undefined inside a function

// "use strict" // strict mode.
function greet(){
    console.log(this); // points to window.
}
greet();

// Inside a Method ( Object )
// when this is used inside an object's method, it refers to object that owns the method.

const obj3 = {
    name:"rohit",
    age:20,
    jet: function(){
        console.log(this); // points to object. {name: 'rohit', age: 20, jet: ƒ}
    }
}
obj3.jet();

// In strict mode, this will point undefined.
// In non strict mode, this will point to object.

// Arrow function do not have their own this, they inherit this from the surronding lexical scope.

let obj45 = {
    name:"shriyash",
    age:20,
    Sun: ()=>{
        console.log(this); // inherits from global scope [Window]
    }
}
obj45.Sun();

let obj46 = {
    name:"shriyash",
    age:20,
    dance: function(){
        let ab = ()=>{
            console.log(this); // surrounding mei function hai, function wala kisko point karega? Object ko. {name: 'shriyash', age: 20, greet: ƒ}
        }
        ab();
    }
}
obj46.dance();

// Inside a Class/Constructor - this refers to the instance of the object being created.

class Person{
    constructor(name,age){
        this.name = name; // this is pointing to ak (which is calling it)
        this.age = age;
    }
}
let ak = new Person("Shri",19);
console.log(ak); // Person {name: 'Shri', age: 19}

let meet = ()=>{
    console.log(this); // global scope [Window]
}
meet();

let keet = function(){
    console.log(this); // global scope [Window]
}
keet();