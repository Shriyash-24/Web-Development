// fetch() --> Async Task.
// Weather App.

const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3c844b4ec7744ef9b3a33849250301&q=London&aqi=no`);

// fetch will take some time to run. So if I print this obj, Promise { <pending> } will come why? --> Because I am not waiting for fetch to execute.

// console.log(obj); // Promise { <pending> }

// setTimeout(()=>{
//     console.log(obj);
// },2000); // I can't use setTimeout because I don't know how much time it will require to fetch data.

// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }); // obj's response we can use this as an argument. If the API REJECTS your request, use catch to catch the error. .then will execute, when the promise is resolved.

// 3 States Of Promise --> 
// 1. Pending
// 2. Resolve --> Your request is resolved.
// 3. Reject --> Your request is rejected. Catch will catch the rejected requests.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const pro2 = Promises.then((response)=>{
    // console.log(response.json()); // JSON can give you the response body part but it is also async task. So, I can't console.log it. It will give me Promise { <pending> }

    // 1st method.

    // const pro2 = response.json();
    // pro2.then((data)=>{
    //     console.log(data);
    // }) --> make it a promise then.

    // 2nd method
    return response.json();
})

// pro2.then((data)=>{
//     console.log(data);
// })

// 3rd method --> Promise Chaining
Promises.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})

// 4th Method
Promises.then(response=>response.json()).then(data=>console.log(data));

// The 3rd method code can be written in single line also because of arrow functions.

// 5th Method
fetch(`http://api.weatherapi.com/v1/current.json?key=3c844b4ec7744ef9b3a33849250301&q=London&aqi=no`)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));


