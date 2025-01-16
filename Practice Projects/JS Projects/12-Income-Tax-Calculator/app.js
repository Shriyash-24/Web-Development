const salary = document.getElementById('income');
const result = document.getElementById('result');

const btnEl = document.getElementById('calculate');

btnEl.addEventListener('click',(event)=>{
    event.preventDefault();

    if(salary.value <= 300000){
        result.innerHTML = `No Tax`;
    }
    else if(salary.value > 300000 && salary.value <= 700000){
        result.innerHTML = `${(salary.value * 5)/100} is your tax.`;
    }
    else if(salary.value > 700000 && salary.value <=1000000){
        result.innerHTML = `${(salary.value * 10)/100} is your tax.`;
    }
    else if(salary.value > 1000000 && salary.value <=1200000){
        result.innerHTML = `${(salary.value * 15)/100} is your tax.`;
    }
    else if(salary.value > 1200000 && salary.value <=1500000){
        result.innerHTML = `${(salary.value * 20)/100} is your tax.`;
    }
    else if(salary.value > 1500000){
        result.innerHTML = `${(salary.value * 30)/100} is your tax.`;
    }

})