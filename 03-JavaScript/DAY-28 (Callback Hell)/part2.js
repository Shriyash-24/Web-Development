// Callback Hell.
// Domino's Pizza Order:-

function placeOrder(callback){
    console.log("Talking with Domino's");
    setTimeout(()=>{
        console.log("Ordered Successfully");
        callback();
    },2000)
    
}

function preparingOrder(callback){
    console.log("Pizza Preparation Started...");
    setTimeout(()=>{
        console.log("Pizza Preparation Done.");
        callback(); // calling pickupOrder.
    },5000)
}

function pickupOrder(callback){
    console.log("Reaching Restaurant for picking order.");
    setTimeout(()=>{
        console.log("Order picked up by delivery boy");
        callback();
    },3000)

}

function deliverOrder(){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Order delivered successfully");
    },5000)
}

// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
})
// Callback Hell --> Callback, inside that another callback is getting called. The dis-advantage of this is that readibility of code will be literally 0 and there is a dependency between functions.


