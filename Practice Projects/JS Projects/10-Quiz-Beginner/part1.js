// I can Use This JS File Only When User Enters All 5 questions and submits them. 

const form = document.querySelector('form');
const original_answer = ["Sachin Tendulkar","West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"];


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);

    const answer = Array.from(data.values());
    let result = 0;
    for(let i=0;i<answer.length;i++){
        if(answer[i] === original_answer[i]){
            result++;
        }
    }
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 are correct!`;
})