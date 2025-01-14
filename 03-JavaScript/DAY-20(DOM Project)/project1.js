function timing(){
    const timer = document.getElementById('root'); // taking the root property.
    const now = new Date(); // created a date.
    const IndianTime = now.toLocaleTimeString(); // converting it local time string.
    timer.innerHTML = IndianTime; // Time will be shown.
}

const timer = document.getElementById('root'); // this is written to use timer, as it went in the function.

timer.style.fontSize = "50px"; // increasing font size.
timer.style.display = "flex"; // div is now flex.
timer.style.justifyContent = "center"; // div got centered by x axis
timer.style.alignItems = "center"; // div got centered by y axis.
// Now we still see that time is not coming in center of the screen, it's because of the size of the div element.
timer.style.height = "100vh";

// Now I want to continously change the time, for this purpose I am applying timing function.
setInterval(timing,1000);
// Line no 18 was timing(); only before.
// Now I want to update time every second. I can't use while(true), because it will crash the program. To use it, setInterval would be used.