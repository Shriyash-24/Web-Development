// Event Bubbling

// Let's say I have 3 div's present in parent child relationship.
/* <div> // Grandparent div
     <div> // Parent div
        <div></div> // Child div
     </div>
    </div> 
*/

// Let's say I apply eventListener on child div and it is named click. When I click over it then it is propagated outwards. console log --> child clicked.
// Parent also has eventListener with click and console log --> parent clicked.
// Grandparent also has eventListener with click and console log --> grandparent clicked.

// Now, when I click child what will be printed. --> child,parent,grand-parent teeno clicked print hoga. Now which will print first? --> Child ke baad Parent ke baad Grand parent and this is event bubbling.

// Event capturing is opposite to this, GP --> Parent --> Child. 

// So now how to decide between event capturing and event bubbling?
// Refer to Bubbling Project