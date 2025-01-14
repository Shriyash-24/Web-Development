let str1 = "Hello";
let str2 = 'Mein toh accha hu';
let str3 = `Aur bhaiya kya haal chaal`;
console.log(str1, str2, str3); // Hello Mein toh accha hu Aur bhaiya kya haal chaal

let price = 50;
// Backend se price aa raha so how to display it? 
console.log(`Price of fresh tomato is ${price}, get it ASAP`); // ${} is used to display the variable value.

console.log("Price of the fresh tomato is",price,"get it ASAP");

// String Concatenation
let s1 = "hello";
let s2 = "Coder Army";
console.log(s1,s2); // hello Coder Army
console.log(s1+s2); // Concatenated String --> helloCoder Army

console.log(s1.length); // Length of s1

// I want this as the output --> "hello coder army" Two approaches -->
console.log('"hello coder army"'); // "hello coder army"
console.log("'hello coder army'"); // 'hello coder army'

let message = "Rohit bhaiya best educator ever.\nbahut acche insaan hai";
console.log(message);
// Rohit bhaiya best educator ever. 
// bahut acche insaan hai --> Output mei new line aayega.

let comment = "Rohit bhaiya bade badmash hai.\\n bahut acche insaan hai"; // \ ye bolega ki apne next wala as it is print kar dena.
console.log(comment); // Rohit bhaiya bade badmash hai. \n bahut acche insaan hai so basically even \n is printed.

let special = "Rohit";
// 0th index - R, 1st index - o and so on but don't think it as an array!
console.log(special[0]); // R
console.log(special[-1]); // undefined because negative index not allowed.
console.log(special.charAt(3)); // Gives a character at 3rd index --> i
console.log(special.charAt(-1)); // returns an empty string because negative index not allowed.

// Lowercase to uppercase
console.log(special.toLowerCase()); // --> Special won't change, *returns a new string*
console.log(special.toUpperCase()); 

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder")); // First word index. [6]
console.log(hero.lastIndexOf("Coder")); // Last word index. [17]
console.log(hero.indexOf("coder")); // -1 if not present.
console.log(hero.includes("Coder")); // true/false value.

let newstring = "HeloDon";
            //   0123456
            //  -7-6-5-4-3-2-1 
console.log(newstring.slice(0,3)) // Hel hii aayega. Only 0 se 2 include hoga. Last wala index include nahi hota, basically 3 include nahi hua. Slice wala slice karke ek naya string de deta hai.

console.log(newstring.substring(0,3)); // Same as slice. But what's the difference? --> Hel hii print hoga. 

// Slice can take negative index also.
console.log(newstring.slice(-6,5)) // eloD is printed because -6 is e and 5 is D.
console.log(newstring.slice(-2,4)); // -2 - o, 4 - D --> starting index end index se pehle hona chahiye.. so empty string is printed.

let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Hi")); // First Ji is replaced., O/P --> Hello Hi Kaise ho Ji.
console.log(str10.replaceAll("Ji","Hi")); // All Ji's are replaced.  , O/P --> Hello Hi Kaise ho Hi.

let str11 = "Money! Honey! Sunny! Funny";
console.log(str11.split("! ")); // Array mei convert hoo gya comma/exclamation mark ke basis pe. O/P --> [ 'Money', 'Honey', 'Sunny', 'Funny' ]

let str12 = "  hello ji";
console.log(str12.trim()); // starting aur end wale space ko hata dega.

// New way to create string.
let latest = new String("Hello"); // new keyword then use string. Output - [String: 'Hello']. Basically it takes and stores in Heap. It's typeof is object. Because they store in key value pairs, so we could access them.
console.log(latest); // [String: 'Hello']
console.log(typeof latest); // Iska type Object hoga.