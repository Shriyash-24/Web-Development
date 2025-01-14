// Shallow Copy
let obj1 = {
    a:1,
    b:2
};

let obj2 = obj1; // Shallow copy --> REFERENCE. Copy by reference. If you do any changes in obj2 then changes are made in obj1.
console.log(obj2); // {a:1,b:2}
obj2.a=10;
console.log(obj1); // {a:10,b:2}
console.log(obj2); // {a:10,b:2}

// Deep copy

// It means obj1 and obj2 will be different.

let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj3); // Changes are only made in obj3 only. {a:20,b:2}


// Nested Object --> Object ke andar object.
const user = {
    name:"Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city:"haridwar",
    }
}

// How to access pincode?

console.log(user.address.pincode); // User mei address ke liye dot lagayega phirse pincode ke liye phirse dot lagao. O/P --> 246149.

// If we want to create a copy of user?

const user2 = Object.assign({},user); // Creates a copy of user
console.log(user2); // Entire user will be copied.

user2.address.pincode = 342145;
console.log(user.address.pincode); // Pincode got changed of user. Nested objects wale change hoo jate. Nested objects ki shallow copy hoti hai (V.IMP) 

user2.name = "Mohit";
console.log(user.name); // But if I change name of user2 then name will be not changed in user.

// Assign will change values in nested objects. Same will happen for spread operator.

// That's why use structuredClone to create a deep copy.

// Destructuring of an Object --> It is a syntax that allows us to unpack properties from objects into distinct variables. It provides a clean and concise way to extract values without directly accessing them via dot notation or bracket notation.

let obj5 = {
    teacher_name:"Rohit",
    money:420,
    balance:30,
    age:20,
    aadhar: "aadhar_card"
};
// Destructuring means ki mujhe value nikalni hai.

// const { teacher_name, balance } = obj5;
// console.log(teacher_name,balance); // Rohit 30.

// There is another method, if you want to change the values.
const {teacher_name:full_name,balance:amount} = obj5;
console.log(full_name,amount); // Rohit 30
// But now you won't be able to use name,balance.
// Object hai tere pass uss mei se kuch value teko chahiye toh usko le liya tune.

// What if I want name,age differently and rest objects differently so use REST OPERATOR here.

const {teacher_name,age,...obj8} = obj5;
console.log(obj8); // { money: 420, balance: 30, aadhar: 'aadhar_card' } --> Rest of the objects.

// Destructuring of Array
const arr5 = [3,2,1,5,10];
const [first,second] = arr5;
console.log(first,second); // The value 3 and 2 you will get here.

// Let's say you want 3,2 & 5, you don't want 1.
const [pehla,dusra,,chautha] = arr5; // Jo nahi chahiye uske liye , laga do.
console.log(pehla,dusra,chautha); // 3 2 5

const [first1,second2,...third3] = arr5; // baki 1,5,10 in third array.
console.log(first,second,third3); // 3 2 [ 1, 5, 10 ]

// Destructuring of nested objects 
let obj10 = {
    name:"Rohit",
    age:20,
    arr56:[20,30],
    address: {
        pincode:246149,
        city: "haridwar"
    }
};

// Now I want its pincode or city.
const {address:{pincode}} = obj10;
console.log(pincode); // 246149

// Now to access array's first value.
const {arr56: [pehela]} = obj10;
console.log(pehela); // 20

// Function
let user50 = {
    name: "Rohit",
    amount: 420,
    greet: function(){
        console.log("Hello");
    },
    meet: function(){
        return 20;
    }
}
user50.greet(); // Function call karo then function ke andar ka Hello execute hoo jayega.
console.log(user50.greet()); // Pehle execute hoo gya Hello uske baad undefined aa jayega.
console.log(user50.meet()); // 20.


