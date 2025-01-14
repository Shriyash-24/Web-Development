
// Program - 4 - Start
console.log("I am first");

fetch("https://youtube.com")
.then(()=>console.log("Hello"));

console.log("I am last");
// Program - 4 - End

// Async --> The task is executed, when a particular condition is met. Fetch is like, it will fetch the data from youtube. And when data will come, Hello is printed. This is a Async task, when data will come then it is executed.

// I am first is printed. Now fetch came, and will give it to WebAPI. Then this fetching will happen simulatanesously and now I ma last is printed and then data is fetched and that is executed.
// fetch is a promise and it goes in Microtask queue, and then event loop comes and checkes call stack if it is empty or not.
// Microtask queue has more priority than callback queue. So first microtask queue that event loop will check.