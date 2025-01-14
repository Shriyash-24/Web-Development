// For of Loop
const arr = [10,20,11,18,13];
// For of loop is used in arrays. If I need to perform operations on arrays, I will use the for of loop.
for(let value of arr)
{
    console.log(value); // all values will be printed.
}

// I can apply it in strings also.
let str = "Shriyash is good boy";
for(let value of str)
{
    console.log(value); // all characters will be printed.
}    

// Don't use for of loop in objects!
const obj1 = {
    name:"Chavvi",
    age:22,
    gender:"female"
};

// for(let value of obj1){ --> Error --> obj1 is not defined
//     console.log(value);
// }

// Object is not iterable, that's why we can't use for of loop in objects. Object's main role is to store information. Objects ke liye symbol.iterable define nahi hui.

// Now I want to iterate object no matter what.
for(let value of Object.keys(obj1)){
    console.log(value, obj1[value]);
}
// V.IMP --> Object.values returns an array. Object.keys also returns an array.

// Call Back Function

function names(fun){
    console.log("Hello I am name");
    fun();
}

function greet(){
    console.log("I am call back function");
}
names(greet); // Call mat karna, reference bhejna. As a argument function ke andar kisi ek aur function ko bhejna, isi ko call back function bolte hai. greet ki value fun mei chale gyi, then fun() greet ko hii toh call karega.

names(function greet(){
    console.log("I am call back function");
});
// Pura ka pura function bhi uthake as an argument ja sakta hai.

// Arrow Function
names(()=>{
    console.log("I am call back function");
});

// Ye fetchData wale ka kaam hai ki har ek 5 seconds call hoo aur backend ke data ko layega aur frontend pe dikhayega.

function fetchData(){
    // code
    console.log("I am fetching data");
}

setInterval(fetchData,5000); // (function_name,time(5000 milliseconds = 5 seconds)) . So mei setInterval function mei ek aur function fetchData pass kar raha hu. This is real world example.

// ---------------------------------------------------------

// forEach --> Array Iteration
// forEach ek ek karke value ko utha ta hai bhai. 10 ko num mei dalunga, phir 20 dal jayega. 
// forEach expect karta hai ek call back function.
let arr1 = [10,20,30,40,50];
arr1.forEach(function(num){
    console.log(num);
});

// Arrow Function
arr1.forEach((num)=>{
    console.log(num);
});
// Single Line Arrow Function
arr1.forEach((num)=> console.log(num));
// Value with index
arr1.forEach((num,index)=> console.log(num,index));
// Value with array.
arr1.forEach((num,index,arr)=> {
    arr[index] = num*2;
});
console.log(arr1); // [ 20, 40, 60, 80, 100 ]

// Single Argument: Number
// Second Argument: Index
// Third Argument: Array

function greet(num){
    console.log(num);
}
arr1.forEach(greet);

// Filter --> Helps in filtering out data.
let arr2 = [10,22,33,41,50];
// How to filter only even numbers?
// filter also expects call back function
const result = arr2.filter((num)=> {
    return num%2==0;
})
// filter wants a statement in return. num%2==0 true hoga ya false. It gives answer in true or false.
console.log(result);
// You can give num,index,arr_name also.
// Shortcut
const result1 = arr2.filter((num)=> num%2==0);
console.log(result1);

//Example.
const students = [
    {naming:"rohan",age:22,marks:70},
    {naming:"Mohan",age:24,marks:80},{naming:"Darshan",age:28,marks:30},
    {naming:"Mohit",age:32,marks:40},{naming:"Shadik",age:12,marks:90}
]

const result2 = students.filter((obj)=>{ // 'obj' is the current student object being processed
    return obj.marks>50;
})

// Single line
const result3 = students.filter((obj1)=>obj1.marks >50);
// Destructure Method.
const result4 = students.filter(({marks})=>obj1.marks >50);


// Map
// Filter only filters results, map modifies the values.

const arr6 = [1,2,3,5];
const res = arr6.map((num)=>{
    return num*num
});
console.log(res);

// Single Line
const res1 = arr6.map((num)=>num*num);
console.log(res1);

// forEach never returns any values, map returns values.

const res2 = arr.map((num,index)=> num*num*index);

const arr24 = [1,2,3,4,5,6];
// My goal: Filter out even number and need its square.
const res24 = arr24.filter((num)=>num%2==0).map((num)=>num*num);
console.log(res24); // [ 4, 16, 36 ]