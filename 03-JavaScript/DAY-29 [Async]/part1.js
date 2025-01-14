
// Program - 1 Start
console.log("Hello Coder Army");

function meet(){
    const arr = [2,4,6];
    console.log(arr[0]);
}

function greet(){
    const a = 2 + 3;
    console.log(a);
    meet();
    console.log(a*a);
}

greet();
console.log("Program End");
// Program 1 - End

// How Program 1 will execute? This program will go in call stack. And global execution context is created. So, Hello Coder Army is printed. Now it sees a function, but it is run when it is called so it is ignored. So, meet and greet both are ignored.
// Now it comes on greet() function call and now entire execution context is created for this function. Now, a becomes 5. And 5 is printed. And meet() is seen so entire executoon context is created and put in stack.
// Now meet function will execute and 2 is printed. 
// Now, meet function is removed from stack and comes to greet() function again and then 25 is printed and function is completed and removed from stack.
// So on top now, global execution context is only remained, and hence Program End is printed and then global execution context is also deleted.

