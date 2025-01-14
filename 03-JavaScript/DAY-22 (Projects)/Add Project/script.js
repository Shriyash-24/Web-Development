const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    // Read the data.
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value); // input1.value --> String initially, convert it to number.
    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);
    // Checking if number is NaN [String] or not.
    if(isNaN(number1) || isNaN(number2)){
        return;
    }

    // Output the result.
    const result = number1 + number2;
    const re = document.getElementById('result');
    re.textContent = "Result:" + result;

})