const btnEl = document.getElementById('btn');
const inputOne = document.getElementById('1');
const inputTwo = document.getElementById('btn-margin');
const result_paragraph = document.getElementById('result');
const spanEl = document.getElementById('re');

btnEl.addEventListener('click',()=>{
    result_paragraph.style.display = `block`;
    const inputFirst = Number(inputOne.value);
    const inputSecond = Number(inputTwo.value);
    const res = inputFirst + inputSecond;
    spanEl.innerHTML = `${res}`;
})