let age = 20;

age = "Twenty";

console.log(age+10); // JavaScript is not showing any errors to the developer.

let obj = {
    name: "Rohit",
    age: 17,
};
console.log(obj.height); // It should show me an error.

// So, typescript means you need to define the type of any variable you will use. 
// That's why typescript name came. Typescript is strict to datatype.
// Eg - let num: number = 10; Now I can't change num to "ten" in string.

// Browser will understand only HTML, CSS, JS. So, it doesn't understand Typescript.
// Typescript gets converted to Javascript for this purpose and it is converted by a compiler. 
// Typescript is a subset of Javascript, I can't run JS Code in TS but I can run JS Code in TS.
// Installing TypeScript Compiler --> npm install -g typescript.
// Version Of TS --> tsc --version / tsc -v
// Running TS File --> tsc <filename> / tsc

/* 
When running TS file, you need to mention, which version are you going to convert that file. You can use the command --> tsc <filename> --target es2016 

But I would have to write target many times, for this purpose we have typescript configuration file in JSON format specifying many such properties. 
Use tsc --init to get that file.
Now to run TS file, I can use tsc command only.

tsc --watch command means js will execute simulataneously. ctrl + C to exit watch mode.
*/

// HW Section
/* 
Compile Time Language --> Compiled languages are converted directly into machine code that the processor can execute. As a result, they tend to be faster and more efficient to execute than interpreted languages. They also give the developer more control over hardware aspects, like memory management and CPU usage.
Eg - C,C++,Erlang, Haskell, Rust, Go. 
Interpreted Language --> Interpreters run through a program line by line and execute each command. Interpreted languages were once significantly slower than compiled languages. But, with the development of just-in-time compilation, that gap is shrinking.
Eg - PHP, Ruby, Python, JavaScript
JIT: Just In Time --> JIT compilation attempts to use the benefits of both. While the interpreted program is being run, the JIT compiler determines the most frequently used code and compiles it to machine code.
