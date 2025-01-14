
const arr = [10,20,30,40,50];
// reduce expects a call back function and intialization. Reduce focuses on obtaining a result.
// accumulator will have 0 initially and current value will be array's elements.
const result = arr.reduce((acc,curr)=>{
    console.log(acc,curr); // just visualizing the acc, curr values.
    acc = acc + curr;
    return acc; // whatever i return will go in accumuator.
},0)
console.log(result); // 150

// Single Line
const result2 = arr.reduce((acc,curr)=> acc+curr,0);
console.log(result2); // 150

// hasOwnProperty
let obj4 = {
    name:"rohit",
    age:10
}
let current = "name";
console.log(obj4.hasOwnProperty(current)) // Agar present hai toh true otherwise false.

let arr1 = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
// Final result should be in object form. And it will tell me ki orange kitni baar aaya, grapes kitni baar..
const result3 = arr1.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr] = 1;

    return acc;
},{})
console.log(result3); // { orange: 3, apple: 2, banana: 2, grapes: 1 }

