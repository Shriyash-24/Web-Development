// Most Optimized Code.

const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName = 'BUTTON'){
        document.body.style.backgroundColor = event.target.id;
    }
})

// Less Optimized Code

const body = document.body;
const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        body.style.backgroundColor = button.id;
    })
})