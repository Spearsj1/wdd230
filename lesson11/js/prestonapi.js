const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=614cab9e3856a7df45c0b8af69ef0158";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('curw').textContent = jsObject.weather[0].main;

        const curf = ('jsObject.main.temp' - 273.15) * 9/5 + 32;
        document.getElementById('temp').textContent = curf + '°F';

        const windc = 35.74 + 0.6215 * curf - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * t * Math.pow(s,0.16);
        document.getElementById('wind').textContent = windc + '°F';

        document.getElementById('hum').textContent = jsObject.main.humidity + '%';
        
        document.getElementById('speed').textContent = jsObject.wind.speed;
    });