
// Created an element --> <li>TS</li>
const element = document.createElement('li'); // this creates a li element.
element.innerHTML = "TS"; // Now TS goes into the created li element.

// Even though the element is created, it is not attached to the DOM.
const parent = document.getElementById('root'); // first take parent of the element you need to add.
parent.appendChild(element); // append element as a child into that parent.

// Attaching multiple values --> made a function to do that.
function attach(content){
    const element = document.createElement('li');
    element.innerHTML = content;

    const element2 = document.createElement('li');
    element2.innerHTML = content+"V2";

    const parent = document.getElementById('root');
    parent.appendChild(element);
    parent.append(element,element2); // I can give multiple statements here.
}
attach("React.js");

// Creating Text Node
const text_node = document.createTextNode("Hello Coder Army");
const papa = document.getElementById('root'); // finding its parent.
papa.append(text_node);

// Creating Attribute Node
const attribute_node = document.createAttribute("id"); // creates a key of id.
attribute_node.value = "first"; // now id:first
// Access to first list.
// Now I want to attach it <li>CN</li>
const curr_list = document.querySelector('li');
curr_list.setAttributeNode(attribute_node);

// Access to second list.
// const pita = document.getElementById("root");
// pita.children[1].setAttributeNode(attribute_node); // chiildren[1 gives second list], pita.children will give you HTMLCollection(4).

// Accessing Attributes
const aelement = document.getElementById("root");
console.log(aelement.getAttribute("id")); // root
console.log(aelement.getAttribute("style")); // null

// Adding new attributes.
aelement.setAttribute("custom","20"); // New Attribute.
aelement.setAttribute("class","Rohan");

aelement.removeAttribute("custom"); // attribute deletion.

// Add Nodes To The DOM 

/* 1: appendChild(node)
   Adds a node as the last child of a parent.
   2: append(node1,node2,...)
   Adds Multiple Node as the last child of a parent.
*/

const pitashri = document.getElementById("root"); // Consider as an array
const element89 = document.createElement('li');
element89.innerHTML = "TS"; // data

// Adding to the start.
pitashri.prepend(element89); // Adds at start.
pitashri.append(element89); // Adds at end.

// Insert Before HTML list.
const child2 = pitashri.children[1];
pitashri.insertBefore(element89,child2); // element89 is what you want to add, child2 is reference. So before child2, that element will be inserted.

// Replace Child.
pitashri.replaceChild(element89,child2); // Here, element89 is what or which content you want to replace with, child2 is reference.

// Using innerHTML 
const parent6 = document.getElementById("root");
parent6.innerHTML = "TS"; // Now entire ul ke andar jitne child thee vo sab replace hoke sirf TS reh jayega.
parent6.innerHTML += "<li>TS</li>"; // Now entire html remains and TS gets added at the end. 

// insertAdjacentElement()
const element90 = document.createElement("div");
element90.innerHTML = "Hello Coder Army"
// Mujhe ul se pehle div ko dalna hai.
/* beforebegin: Before the element itself.
   afterbegin: Inside the element, before its first child.
   beforeend: Inside the element, after its last child.
   afterend: After the element itself.
*/
parent6.insertAdjacentElement("beforebegin",element90); // before parent6 ke element90 ko daldo.
parent6.insertAdjacentElement("afterend",element90); // after the parent6 end.
parent6.insertAdjacentElement("afterbegin",element90); // after parent6, so first child ban jayega.
parent6.insertAdjacentElement("beforeend",element90); // just before parent6 end.

// Deleting Node Or Element.
document.querySelector('li').remove(); // So first li occurence got removed.

const parent34 = document.getElementById("root");
parent34.removeChild(parent34.children[0]); // I removed the child.
