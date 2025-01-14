// JS is a single threaded synchronous language. Only 1 task gets executed at once. Synchronous means one by one task will execute.
// JS behaviour also might be asynchronous.

// Asynchronous Task.
console.log("10");

setTimeout(()=>{
    console.log("20");
},5000);

console.log("30");

// 10 30 20 will get printed.

// Synchronous Task.
console.log("10");
const timer = Date.now();
// timer contains older time.
while(Date.now()-timer<2000){
    // Wait for 2 second.
}
console.log("20");

console.log("30");

// If setTimeout was part of JS then 10 20 30 would have been printed. But setTimeout is a part WebAPI.