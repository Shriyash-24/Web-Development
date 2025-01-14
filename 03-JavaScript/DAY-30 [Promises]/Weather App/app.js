
document.querySelector('button').addEventListener('click',()=>{
    const place = document.getElementById('location').value;

    function updateHumidity(data){
        const humidity = document.getElementById('humidity');
        humidity.innerHTML = `Humidity: ${data.current.humidity}`;
    }
    function updateImage(data){
        const image = document.getElementById('image');
        image.src = `${data.current.condition.icon}`;
    }

    function updateWeather(data){
        const weather = document.getElementById('weatherInfo');
        weather.innerHTML = `Weather: ${data.current.condition.text}`;
    }

    function updateTemp(data){
        const element = document.getElementById('tempInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}°C`;
    }

    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=3c844b4ec7744ef9b3a33849250301&q=${place}&aqi=yes`);

    promise
    .then(response=>response.json())
    .then(data=>{
        updateImage(data);
        updateWeather(data);
        updateTemp(data);
        updateHumidity(data);
    });
});