const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
// By default bubbling works.
//addEventListener(first_event,callback,capture) --> by default capture is false

child.addEventListener('click', (event)=>{
    console.log(event.target); // kisne trigger kiya hai.
    console.log(event.currentTarget); // khud konsa element hu.
    console.log("child clicked");
    event.stopPropagation() // --> Bahar mat ja simple
},false) 

parent.addEventListener('click', ()=>{
    console.log("parent clicked");
},false) 

grandParent.addEventListener('click', ()=>{
    console.log("grandParent clicked");
},false) 

// Bubbling --> C --> P --> GP [Andar se bahar ki aor]
// Capturing --> So, if I click on child, GP --> P --> C [Bahar se andar ki aor]