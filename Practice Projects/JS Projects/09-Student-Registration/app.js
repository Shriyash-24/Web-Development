const btnEl = document.getElementById('btn');
const firstName = document.getElementById('f_name');
const lastName = document.getElementById('l_name');
const age = document.getElementById('age');
const result = document.getElementById('result');

btnEl.addEventListener('click',()=>{
    const f_value = firstName.value;
    const l_value = lastName.value;
    const age_value = age.value;

    if(f_value === "" || l_value === "" || age_value === ""){
        result.innerHTML = `Please Fill The Form.`;
    }

    else{
        result.innerHTML = `Thank You For Your Time. <br> Here are your details --> <br> Name: ${f_value} ${l_value} <br> Age: ${age_value}`;
    }
})