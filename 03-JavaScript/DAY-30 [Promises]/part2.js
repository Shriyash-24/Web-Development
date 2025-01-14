cart = ["pizza","coke","sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");

    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const food_available = true; 
            if(food_available){
                console.log("Ordered Successfully");
                const order = {orderId: 221, food: cart, restaurant: "Domino's", location: "Dwarka"};
                resolve(order);
            }
            else{
                reject("Items Out of Stock");
            }
        },2000)
    })
    return pr;
}

function preparingOrder(order){
    console.log("Food Preparation Started...");

    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Pizza Preparation Done.");
            const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location}
            resolve(foodDetails);
        },5000)
    })
    return pr;
}

function pickupOrder(foodDetails){
    console.log("Reaching Restaurant for picking order.");

    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Order picked up by delivery boy");
            const dropLocation = foodDetails.location;
            resolve(dropLocation);
        },3000)
    })
}

function deliverOrder(dropLocation){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Order delivered successfully");
    },5000)
}


placeOrder(cart)
.then(order=> preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(dropLocation=>deliverOrder(dropLocation))
.catch(error=>console.log(error));

// Format of generating new promise. 
// const pr = new Promise(function(resolve,reject){

// })

