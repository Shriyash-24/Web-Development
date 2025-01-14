
document.body.addEventListener('click',(event)=>{
    const div = document.createElement('div');
    div.className = 'circle';
    div.textContent = "Hi";
    const x = event.clientX;
    const y = event.clientY;
    div.style.left = `${x-25}px`;
    div.style.top = `${y-25}px`;

    const color = ["red","blue","orange","green","purple","indigo","gold","dodgerblue","sky","fuchsia","gray"];
    div.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },5000)
})
