// Refer to project1 for the initial phase of the lecture.
// project2 --> Summer Olympics 2028 comes after the lecture.

// Acessing By CSS Selectors
// i) Single Element:
// Method: document.querySelector(selector)
// Description: Returns the first element matching the specified CSS selector.

// How to select h1 element?
const id = document.querySelector('#first');
// id.innerHTML = "Hello Money";

// How to select ul?
const id2 = document.querySelector('.header2');
id2.style.backgroundColor = "pink";

// If I have class as header1 appearing multiple times then?
const id3 = document.querySelector('.header1'); 
id3.style.backgroundColor = "gold"; // Hello Money now has gold background color.
// So, first instance gets selected.

// What if you want all queries.
/*  ii: Multiple Elements:
        Method: document.querySelectorAll(selector)
        Description: Returns a static NodeList of all elements matching the 
        specified CSS selector. 
*/

const obj = document.querySelectorAll('.header1');
console.log(obj); // Gives me a NodeList of instances where header1 came. Similar to array.
// How to access them?

obj[0] // Gives 1st element.
obj[1] // Gives 2nd element.

obj.length // 2

// Iterating over NodeList.

for(let i=0;i<obj.length;i++){
    console.log(obj[i]);
}

// I can apply for of loop too, to iterate values.
for(let val of obj){
    console.log(val);
}

// forEach also
obj.forEach((val)=>{
    console.log(val)
})

// How to convert NodeList to array.
Array.from(obj) // Returns array.


let obj7 = document.querySelectorAll('li')
console.log(obj7); // NodeList(4) [li, li, li, li] --> gives me lists.

/* iii: Accessing by Tag Name
   Method: document.getElementsByTagName(tagName)
   Description: Returns a live HTMLCollection of all elements with the 
   specified tag name (e.g., div, p, a).
*/
const obj9 = document.getElementsByTagName('h1');
console.log(obj9); // Now I got HTMLCollection --> It is like an array. Multiple tag names can be there, then so all are returned.

const team = document.getElementsByTagName('li');
console.log(team); // HTMLCollection(4) [li, li, li, li]
team[0] // first list.
team[1] // second list.

// Making list's color blue by iterating over it.
for(let i=0;i<team.length;i++){
    team[i].style.color = "blue";
}

// Using for of loop.
for(let val of team){
    console.log(val); // All lists will get printed in the console.
}

// But I can't apply forEach directly on HTMLCollection, for this you need to convert it to array.

Array.from(team).forEach((val)=>{
    console.log(val);
}) // Now team is converted to array and forEach is applied.

// Accessing Using Relationships.
/* i: Parent Node:
   Method: element.parentNode or element.parentElement
   Description: Access the immediate parent of an element.
*/

const first_list = document.querySelector('li');
console.log(first_list); // first list.
console.log(first_list.parentNode); // parent node.
console.log(first_list.parentNode); // parent element.

// So what is the difference between parent node and parent element.

/* ii: Child Nodes:
   Method: element.childNodes (includes text nodes) or element.children 
   (only element nodes)
   Description: Access all child nodes of an element.
*/
const par = document.querySelector('ul');
console.log(par);
console.log(par.childNodes); // NodeList --> NodeList(9) [text, li, text, li, text, li, text, li, text] 
// Why 9, aren't the child only 4, actually NodeList returns the text nodes also. It is considering spaces between them as text nodes. If you write comment, then also text nodes will come.

// NodeList V/S HTMLCollection
// NodeList will give nodes and text nodes also, while HTMLCollection gives only HTML elements.

console.log(par.children); // HTMLCollection contains only 4 elements.

/* iii: First and Last Child:
   Methods: element.firstChild, element.lastChild, 
   element.firstElementChild, element.lastElementChild
*/
console.log(par.firstChild); // firstChild --> text
console.log(par.firstElementChild); // But this gave me list only.
// Same with last children too.

/* iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling, 
   element.previousElementSibling
*/
console.log(par.nextSibling); // text.
console.log(par.previousSibling); // text
console.log(par.nextElementSibling); // script
console.log(par.previousElementSibling); // h2.

// 3 Important Things
// innerHTML
// textContent
// innerText

const kithtml = document.getElementById('first').innerHTML;
console.log(kithtml); // Hello Coder <strong style="display: none">Army</strong>

const kittext = document.getElementById('first').innerText;
console.log(kittext); // Hello Coder

const kitcontent = document.getElementById('first').textContent; 
console.log(kitcontent); // Hello Coder Army

// innerHTML --> Entire html.
// innerText --> What screen will show.
// textContent --> Entire text written in HTML.

