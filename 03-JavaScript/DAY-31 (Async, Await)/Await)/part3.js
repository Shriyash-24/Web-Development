function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise");
        },5000)
    })
    return p1;
}

function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise");
        },5000)
    })
    return p2;
}

async function greet(){
    console.log("Hello");
    /*
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
    */
   const [data1,data2] = await Promise.all([test1(),test2()]);
   console.log(data1, data2);
   // If data is not related with each other, then you can write Promise.all.
}
greet();
console.log("Hello Bruh");
console.log("How are you bud");

// Stack --> GEC is created in call stack. Functions will be ignored and call is executed. Now whole code will come and greet function will be made in stack.
// Now, Hello will be printed, then await test1() and now it will take 5s so program will not be freeze and greet() will be moved to microstack queue and GEC things will be printed and then when GEC is empty and greet() will come after 5s and it will start execution.
// test1() will execute, then now test2() will go to microstack queue and then after 5s, test2() will come from microstack queue to stack and program is done!