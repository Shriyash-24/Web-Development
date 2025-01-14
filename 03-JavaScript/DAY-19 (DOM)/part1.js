// Dynamically change websites.
// DOM: document object model. It is a way to represent a web page so that programs can interact with it. 
// A browser takes your HTML and converts it into an object. And now I can apply properties on this object.
// Every element will be treated as an object.

// Hierarchy
// 1) Window --> Global
// 2) document [window ke andar]
// 3) HTML file[document file.]
// 4) Head & Body [present in html file]
// 5) Head ke andar kya hai? - Meta, Meta name, Title. Ab uss title mei coder army. Ab uss coder army mei kuch nahi hai so it is text node
// 6) Body ke andar div tag, div ke andar h1,h2,ul hai na.
// 7) h1 mei hello coder army hai and now i can leave it as text node and i have class and id and they are selected in attribute section with id=first.

// Object can't look like this? - <h1 id="first" class="header1">Hello Coder Army</h1>
// It is stored in backend like this and converted directly.
// const obj = {
//     id:'first',
//     class: 'header1', 
//     innerHTML: "Hello coder army", 
//     tag:"h1"
// }
// obj.innerHTML = "Mei badiya hu"


// How to change "Hello Coder Army to Mei Badiya hu"
// Access elements
// document.getElementById
// document.getElementByClassName