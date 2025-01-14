// Global Object
// How am i able to access console.log, Math.random, where?
// They come from global object, as a key. Anyone can access it. Global object is a object.
// Chrome Browser: window
// Node.js: global

// V.IMP --> var become a part of global object. let, const don't become part of global object.

// globalThis we can use where irrespective of any environment ( chrome, node etc). 
// globalThis points to the global object.
let x = 90;
let y = globalThis.x;
console.log(y); // undefined, why? Because let, const are not part of the global object, while var is a part.

var m = 56;
let n = globalThis.m;
console.log(n);
