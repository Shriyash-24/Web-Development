// Sets need unique values only.
const set1 = new Set([10,20,30,40,10,10]);
console.log(set1); // Set(4) { 10, 20, 30, 40 } Even though I added 10 3 times, 10 will come 1 time only.

console.log(typeof set1); // object

const set2 = new Set();
set2.add(4);
set2.add(6);
set2.add("Rohit");
set2.add(30);
console.log(set2); // Set(4) { 4, 6, 'Rohit', 30 }
console.log(set2.size); // 4
// delete
set2.delete(6);

//Instagram Id
const user_id = new Set(["rohit_negi9","Mohit_91","sumit_9"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user)); // Will give answer in true. 'has' ka prayog hum log kar sakte to check ki element hai ya nahi.

// clear
user_id.clear();
console.log(user_id); // Set(0) {} --> set hii clear hoo jayega

// Converting array to set.

let arr3 = [10,30,20,10,40,50];
const set3 = new Set(arr3);
console.log(set3); // Set(5) { 10, 30, 20, 40, 50 }. Array now converted to set.

// Converting set to array
let arr37 = [...set3]; // value ko ek ek karke bahar nikalega.
console.log(arr37); // [ 10, 30, 20, 40, 50 ]

// Union of two sets.
let set4 = new Set([10,20,30,40]);
let set5 = new Set([10,20,70,80]);
let set6 = new Set([...set4,...set5]); // Taking values from set4 and set5 and then vo set ban gya i.e unique values will be stored.
console.log(set6); // Set(6) { 10, 20, 30, 40, 70, 80 }

// How to do intersection. [ matlab jo common hai vo]
const result = new Set([...set4].filter((num)=>set5.has(num)));
// filter is applied on arrays only, now I am converting set4 to array. Then ek ek karke value num mei aayegi and then it is checked.
console.log(result); // Set(2) { 10, 20 }

// for of
for(let value of set4){
    console.log(value); // 10 20 30 40 aa jayega
}

// forEach is used to iterate values in an array.
console.log(set4);
set4.forEach((value)=>console.log(value)); // 10 20 30 40.