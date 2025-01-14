
// Program 2 - Start
console.log("Hello Coder Army");

setTimeout(()=>{
    const a = 2+4;
    console.log(a);
},5000);

let b = 20;
let arr = [20,30,11];
for(let i of arr)
    console.log(i*b);

// Program 2 - End

// setTimeout is not part of JS. It is part of WebAPI. API is set of rules to interact with client and server. API is application programming interface.
// Call stack executes tasks one by one. Now, first GEC is made and Hello Coder Army is printed.
// It comes to setTimeout --> JS will not count its time. WebAPI has setTimeout, setInterval, DOM, fetch, console. They are part of WebAPI. If you want to interact with WebAPI, then to use setTimeout there is a particular set of rules.
// Browser is multi-threaded, so it can execute multiple tasks at the same time. So this Async behaviour comes from this.
// Now, setTimeout came and JS will say I don't understand it and will give it to WebAPI and it is WebAPI [Browser] that will handle the time. Now as soon as 5 second is complete and now callback function is excecuted and now it will go to callback queue.
// Timer is going parallely and now all other tasks will execute and other things will print 400, 600, 220. And now when call stack is empty and 5s is complete and then event loop will now callback queue data will be transferred to call stack.
// Why Callback Queue? --> Why do i need to check if call stack is empty.

// Move to part3.js