const apiKey = 'Bd5e378503939ddaee76f12ad7a97608';

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    
    if (cityInput) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('temperature').textContent = "Temperatura: " + data.main.temp + "°C";
            document.getElementById('description').textContent = "Descripción: " + data.weather[0].description;
        } else {
            alert("Ciudad no encontrada. Por favor, verifique el nombre de la ciudad.");
        }
    } else {
        alert("Por favor, ingrese el nombre de la ciudad.");
    }
}