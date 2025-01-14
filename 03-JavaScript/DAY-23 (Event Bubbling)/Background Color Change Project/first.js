// Intital Code

// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

// const body = document.body; // You can also take it by querySelector, byTagName

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })

// Little bit optimized code
// const body = document.body;
// const buttons = document.querySelectorAll('button');
// console.log(buttons); // NodeList

// buttons.forEach((button)=>{
//     // console.log(button); // Sare button ka access mil gya
//     button.addEventListener('click', ()=>{
//         // console.log(button.id);
//         body.style.backgroundColor = button.id;
//     })

// Main problem of above code is that event listener is executing 100 times for 100 buttons which will make it slow, memory consumption increases, task will become slow.

// So now I apply only 1 eventListener on parent. --> Event Delegation

const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    console.log(event.target.tagName); // BUTTON
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
    console.log(event.target); // konse button ne trigger kiya, from bubbling
})

