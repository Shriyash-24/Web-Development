let obj = {};
obj.name = "Rohit";
console.log(obj); // { name: 'Rohit' }

console.log(Object.getOwnPropertyDescriptor(obj,'name')); /* {
    value: 'Rohit',
    writable: true,
    enumerable: true,
    configurable: true
  } */
// Parameters obj,'name' is given. WHY? --> You are getting descriptors for obj file and in that for the 'name' property.

// Writable means you can change Rohit. Value ko kya mei change kar sakta hu. If writable is false, tu value change nahi kar payega.
// Configurable  true means you can change the values of writable, enumerable and configurable. If false, then you can't change writable, enumerable or configurable values.

// Way to define a property in a object.
let obj1 = {};
Object.defineProperty(obj1,'name',{
    value:"rohit",
    writable:false,
    enumerable:true,
    configurable:false,
})
console.log(obj1); // { name: 'rohit' }
obj1.name = "mohit";
console.log(obj1); // { name: 'rohit' } why? --> writable is false

/* Object.defineProperty(obj1, "name",{
    writable:true, }) */
 // Ye change nahi hoga kyuki configurable false kiya tha.

const obj2 = {
    name:"rohit",
    age:23,
    acc_no:2345676543
}
Object.defineProperty(obj2,'acc_no',{
    writable:false,
})
obj2.acc_no = 2343283745642;
console.log(obj2.acc_no); // value change nahi hogi.

const customer = {
    c_name:"Rohit",
    age:23,
    acc_no:123,
    bal:200
}

// name and acc_no should not change.
Object.defineProperty(customer,"c_name",{
    writable:false,
})
Object.defineProperty(customer,"acc_no",{
    writable:false,
})
customer.c_name = "Mohit";
customer.acc_no = 200234;
console.log(customer); // { c_name: 'Rohit', age: 23, acc_no: 123, bal: 200 }

const customer2 = {
    name:"Rohit",
    age:23,
    acc_no:123,
    bal:200
}

Object.defineProperty(customer2,"name",{
    enumerable:false,
})
// Jiska enumerable true hoga uss key ko print karega. Jo false hoga vo print nahi hoga. 
// Inherit hoke bhi koi bhi property or key atti hai, uska enumerable true hoga toh vo bhi print hoga.
// Customer2 inherits properties from Object.prototype, but they don't get printed because they have enumerable:false.
for(let key in customer2){
    console.log(key); // keys get printed except name.
}

// For in loop : isko array ke sath nhai lete.
// arr is an object.
const arr = [10,20,30];
arr.name = "Rohit";
console.log(arr); // [ 10, 20, 30, name: 'Rohit' ]
// name ko bhi print kar diya bhai isne.
for(let key in arr){
    console.log(key); // arr ke index print hoo jayenge. So 0,1,2,name get printed.
}
// Key mei number bhi and string bhi daal dega, that's why we don't use it.

// Misconception

let user = {
    name: "Rohit",
    age:30
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user,'name',{
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Now user.name won't be changed right? Yes so now many students think that it is done due to hacking. It is a common mis-conception. 
// If hacker get codebase access then he can change writable from false to true.
// There shouldn't be any accidental changes in the file, that's why we are using this.