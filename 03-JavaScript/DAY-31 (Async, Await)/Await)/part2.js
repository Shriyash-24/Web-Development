// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First Promise");
//     },8000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second Promise");
//     },5000)
// })
// console.log(p1); --> can't consume it like this, we have to wait 5 seconds.
// p1.then((response)=>console.log(response));

/* async function greet(){
     const data1 = await p1;
     console.log(data1);

     const data2 = await p1; // it waited for the first time, but it didn't wait for second time. Because promise is resolved already so why wait?
     console.log(data2);
}
greet();
*/


/* async function reet(){
    const data1 = await p1;
    console.log(data1);

    const data2 = await p2;
    console.log(data2);
    // Still now dono sath mei run honge. Because p1 and p2 ki value dono aa chuki hogi 5 second mei hii kyuki JS runs syncronously. 
}
reet();
*/

// p1.then(value=>console.log(value));
// p2.then(value=>console.log(value));
// second promise may run first because it has lesser time compared to p1.

function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise");
        },5000)
    })
}

function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise");
        },5000)
    })
}

async function greet(){
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
}
greet();

// async function returns a promise only. 
async function meet() {
    return "Hello Coder"; // Converts into a promise.
}
meet().then(value=>console.log(value));
