// if --> The if statement executes a block of code, if the specified condition is true.
const ag4 = 20;
if(ag4>18){
    console.log("You are eligible to vote.");
}
// If the condition is false, nothing will happen.

// If else --> Provides alternative block of code if the condition is false.
const age = 30;
if (age >= 18) 
{
  console.log("Eligible");
} 
else 
{
  console.log("Not eligible");
}

// if - else if ladder --> Multiple conditions are sequentially checked.

let age1 = 19;
if(age1<18){
    console.log("Baccha");
}
else if(age1>45){
    console.log("Buda");
}
else{
    console.log("Jawan");
}

// Multiple conditions - switch.
// We can use also in switch condition --> new Date().getDay()
let day = 4;

switch(day)
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;    
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;    
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;    
    case 6:
        console.log("Saturaday");
        break;  
    default:
        console.log("Not a valid day");    
}

// Strict checking is done here, string is compared with string only, int with int.

// Loop --> ek hii kaam ko baar baar karna

for(let i=0;i<20;i++){
    console.log("Hello Coder Army");
}

// Sum of first n number
let sum = 0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);
// V.IMP --> i ke liye memory allocation baar baar hoo raha hai, that's why JS is slower when it comes to loops.

// Nested for loop: loop ke andar loop.
for(let i=1;i<5;i++){
    for(let j=1;j<6;j++){
        console.log(i);
    }
}

// While Loop
let i = 1;
while(i<6){
    console.log(i);
    i++;
}

let arr = [10,20,30];
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

// Printing keys using for loops
const obj1 = {
    name: "Rohit",
    age: 30,
    amount: 420,
    city: "Jalgaon"
};
const key = Object.keys(obj1);
for(let i=0;i<key.length;i++){
    console.log(obj1[key[i]]);
}

// Printing values using for loops
const obj2 = {
    name: "Rohit",
    age: 30,
    amount: 420,
    city: "Jalgaon"
};
const values = Object.values(obj2);
for(let i=0;i<values.length;i++){
    console.log(values[i]);
}