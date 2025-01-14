function time(){
    const date_start = new Date();
    const date_end = new Date("2028-07-21T00:00:00");
    const date_result = date_end - date_start;

    const days = Math.floor(date_result/(1000*60*60*24));
    const days_result = document.getElementById('days');
    days_result.innerHTML = `${days}`;

    const hours = Math.floor(date_result/(1000*60*60)%24);
    const hours_result = document.getElementById('hours');
    hours_result.innerHTML = `${hours}`;

    const minutes = Math.floor(date_result/(1000*60)%24);
    const minutes_result = document.getElementById('minutes');
    minutes_result.innerHTML = `${minutes}`;

    const seconds = Math.floor(date_result/(1000)%60);
    const seconds_result = document.getElementById('seconds');
    seconds_result.innerHTML = `${seconds}`;
}

setInterval(time,1000);