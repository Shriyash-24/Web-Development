// Memory allocation pehle hota hai isiliye -->

greet(); // ye execute hoo jayega kyuki greet wala store hoo chuka hai.
function greet(){
    console.log("Hello Bhaiya");
}

meet(); // error because let contains nothing as initialized.
let meet = function(){
    console.log("Hello Ji");
}
meet(); // Perfectly executed.

