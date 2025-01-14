let age = 20;

age = "Twenty";

console.log(age+10); // JavaScript is not showing any errors to the developer.

let obj = {
    name: "Rohit",
    age: 17,
};
console.log(obj.height); // It should show me an error.

// So, typescript means you need to define the type of any variable you will use. 
// That's why typescript name came. Typescript is strict to datatype.
// Eg - let num: number = 10; Now I can't change num to "ten" in string.

// Browser will understand only HTML, CSS, JS. So, it doesn't understand Typescript.
// Typescript gets converted to Javascript for this purpose and it is converted by a compiler. 
// Typescript is a subset of Javascript so whatever
