// Prototype

let obj3 = {
    name:"rohit",
    amount:420,
    greet:function(){
        return 10;
    }
}
console.log(obj3.toString()); // I have never made toString, then how it is getting accessed?
// Array is a object
let arr = [2,3,1];
arr.push(10); // Push operation kaha se aaaya?

const a = [3,4,10,12]; // Isne properties uthayi hai apne prototype se.
a.__proto__ // You can use this console to see all the properties you can use.
Array.prototype; // Direct access karna hai toh you write prototype.

let user1 = {
    name:"Rohit",
    age:20,
};

let user2 = {
    amount:20,
    paisa:50
};

console.log(user2.amount) // Will return 20
console.log(user2.name); // Will return undefined because it can't use properties of user1.
user2.__proto__ = user1; // User2 ab user1 ki sari properties ko use kar sakta hai.

// arr = [10,20] --> Inherits properties from Array.prototype & Array.prototype inherits it's properties from Object.prototype. Object.prototype ka koi bhi prototype nahi. 

// arr.__proto__.__proto__ refers to Object.prototype. Matlab arr ka prototype aur ab uss prototype ka prototype.

// This process is known as PROTOTYPE CHAINING.
// Now, you can understand why array's type is object kyuki array bhi apne properties object se hii le raha hai.