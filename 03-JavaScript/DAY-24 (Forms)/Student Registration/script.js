const form = document.querySelector('form');
/*
<!-- Event type -->
1: input --> Everything I will input, will get displayed.
2: change --> Clicking outside input field, will trigger the event.
3: focus 
<!-- focus: Does not bubble, so it needs to be directly attached to individual input elements.
focusin: Bubbles, so it can be attached to the form element for event delegation. Jab mei focus karta hu tab trigger hoo jayega. -->
4: blur or focusout --> blur does not bubble, focusout bubbles.
5: click
6: dbclick
7: submit
8: reset --> Submit button you have to change it's type to reset and then you can use reset.
9: FormData 
*/
/*
form.addEventListener('submit',(event)=>{
    // console.log(event); // PointerEvent
    // console.log(event.target); // whenever i click on form data, then it targets that child.
    // console.log(event.target.id); // will give the element id.
    // console.log(event.target.value);
})
*/

// Now I want form data.
form.addEventListener('submit',(event)=>{
    event.preventDefault(); // to stop page refresh
    const first = document.getElementById('first');
    console.log(first.value);

    const second = document.getElementById('second');
    console.log(second.value);

    const third = document.getElementById('third');
    console.log(third.value);

    const result = document.getElementById('result');
    result.innerText = `${first.value} is a userName, ${second.value} is lastName`
    document.body.append(result);
})

// Instead of writing above code, we can use formData.
form.addEventListener('submit',(event)=>{
    const data = new FormData(form);
    console.log(data); // Will give me FormData
    console.log(Array.from(data.keys())); // data.keys se iterator milta hai. I just converted to array and got keys.
    console.log(Array.from(data.values())); // I got values.
    
    for(let [key,value] of data.entries())
        console.log(key,value); // I get key, values.
    
})