// Call Back Hell

// Why do you need callback function?

// Normal Function Making.
// function fetchuser(){
//     console.log("Fetching the user details...");
//     setTimeout(()=>{
//         console.log("Data fetched successfully.");
//         const name = "Rohit"; // data fetched from backend.
//         meet(name);
//     },2000);
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name}, I will meet you soon.`);
// }
// fetchuser();


// With help of callback.
function fetchuser(callback){
    console.log("Fetching the user details...");
    setTimeout(()=>{
        console.log("Data fetched successfully.");
        const name = "Rohit"; // data fetched from backend.
        callback(name);
    },2000);
}

function greet(name){
    console.log(`Hello ${name}`);
}

function meet(name){
    console.log(`Hello ${name}, I will meet you soon.`);
}
function edit(name){
    console.log(`Edit ${name},of the user.`);
}

// Same code can be executed multiple times using callback functions.
fetchuser(greet);
fetchuser(meet);
fetchuser(edit);

// User data: 
// const obj = {
//     name: "Rohit",
//     age: 28,
//     city: "Delhi"
// }
// 1. Greet
// 2. Meet
// 3. Name edit.
// 4. Age

function fetchdata5(callback){
    console.log("Fetch info of user.");
    setTimeout(()=>{
        const obj = {
            name: "Rohit",
            age: 28,
            city: "Delhi"
        }
        callback(obj);
    },2000)
}

// Now I can call multiple functions without hardcoding them. 
fetchdata5(greet);
fetchdata5(meet);
fetchdata5(edit);