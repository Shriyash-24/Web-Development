// Program 3 - Start
console.log("Hello Coder Army");
setTimeout(()=>{
    const a = 2+4;
    console.log(a);
},5000);

setInterval(() => {
    console.log("I am fast");
}, 2000);

let b = 20;
let arr = [20,30,11];

for(let i of arr)
    console.log(i*b);
// Program 3 - End

// We have call stack and global execution context is created. JS doesn't know console.log, WebAPI will call console and print Hello Coder Army.
// setTimeout came now. And now a timer is applied of 5s.
// setInterval came now. Every 2s execute that code.
// Now JS will print 400, 600, 220 is printed and GEC is deleted.
// After this, 2s will complete and will go in callback queue. There is a event loop, it will keep track that call stack is empty or not, now it is empty and I am fast is printed. And now again 2s later, again I am fast is printed. Now, 1s later, now 'a' is printed which is 6. Now, 1s later and again I am fast is printed.
// Event Loop --> If call stack is empty, then from callback queue, the thing is put to call stack.
// Why event loop checks if call stack is empty? --> Because the output will be inconsistent if not done so, the output will vary on different devices.
