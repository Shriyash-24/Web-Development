const original_answer = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
}

const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value === original_answer[key]){
            result++;
        }
    }

    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 are correct!`;
})