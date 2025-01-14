const btnEl = document.getElementById('btn');
const bmiResult = document.getElementById('bmi-result');
const weightCondition = document.getElementById('weight-condition');

const height = document.getElementById('height');
const weight = document.getElementById('weight');



btnEl.addEventListener('click',()=>{
    let result = height.value / 100;
    bmiResult.value = weight.value / ((result)*(result));

    if(bmiResult.value <= 18.5){
        weightCondition.innerText = `Underweight`;
    }
    else if(bmiResult.value > 18.5 && bmiResult.value <= 24.9){
        weightCondition.innerText = `Optimum Range`;
    }
    else if(bmiResult.value >= 25 && bmiResult.value <= 29.9){
        weightCondition.innerText = `Overweight`;
    }
    else{
        weightCondition.innerText = `Obesity`;
    }
})