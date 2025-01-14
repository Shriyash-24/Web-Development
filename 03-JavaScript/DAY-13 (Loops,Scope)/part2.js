// Scope ke baare mei
// Global scope, Local scope(Function scope), block scope.

// Global Scope

let a = 10;
var b = 20;
const c = 30;

function greet(){
    console.log(a);
    console.log(b);
    console.log(c);
};

greet(10);

function hi(){
    // Scope function ke andar hii hoga.
    let d = 10;
    var e = 20;
    const f = 30;
    console.log("Hello");
};

hi();

// Block
if(true){
    // Block scope
    let g = 10;
    var h = 20;
    const i = 30;
}
console.log(h); // Access kar sakta hu h ko kyuki vo var hai. And var can be initialized any number of times which is very dangerous. Var is not block scope, you can make it multiple times.
// Var ko declare karne se pehle hi use kar sakte hai, 

let amount = 20; // global scope
if(true){
    let amount = 30; // block scope
    // let amount = 40; // can't write inside block scope twice.
    console.log(amount);
}