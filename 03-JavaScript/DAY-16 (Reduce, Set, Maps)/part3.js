// Map --> Map is a collection of key-value pairs where both the keys and values can be of any data type [Primitive or object]. Unlike regular JS objects, a Map maintains the order of its elements based on insertion and allows keys of any type (even objects, function and primitive) whereas objects only allow strings or symbols as keys.

const map1 = new Map();
map1.set(3,90);
map1.set("Rohit",45);
map1.set(20,"Mohan");
map1.set("Rohit",25); // 45 ki jagah value 25 ban jayegi, key ek hii hogi bas value update hoo jayegi.
console.log(map1); // Map(3) { 3 => 90, 'Rohit' => 25, 20 => 'Mohan' }

map1.delete(3); // 3 wali key delete.
console.log(map1.has("Rohit")); // true
console.log(map1); // Map(2) { 'Rohit' => 25, 20 => 'Mohan' }

console.log(map1.size); // 2
map1.clear();
console.log(map1); // Map(0) {}. Map1 got cleared.

// Another way of creating map.
const map2 = new Map([
    [4,"rohit"],
    ["Mohan","Rohan"],
    [30,9]
]);
console.log(map2); // Map(3) { 4 => 'rohit', 'Mohan' => 'Rohan', 30 => 9 }

for(let value of map2)
    console.log(value); // puri value ek sath aa raha hai
// [ 4, 'rohit' ]
// [ 'Mohan', 'Rohan' ]
// [ 30, 9 ]

for(let [key,value] of map2)
    console.log(key,value); // key and value dono destructure hoke aa rahi.
// 4 rohit
// Mohan Rohan
// 30 9
