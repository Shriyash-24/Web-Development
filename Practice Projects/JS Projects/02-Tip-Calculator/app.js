const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const btnEl = document.getElementById('btn');
const result = document.getElementById('result');
const p = document.getElementById('special');

function calculate(){
    p.style.display = `block`;
    const tips = tip.value;
    const bills = bill.value;
    const final = bills * (1 + tips/100);
    result.innerText = final.toFixed(2);
}

btnEl.addEventListener('click',calculate);