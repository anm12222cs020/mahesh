async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d92fcc34c4b01f6c3c4cbd9705969e10";  // Replace with a secure method in production
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            displayError(data.message || "City not found.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        displayError("Failed to fetch weather data.");
    }
}

// Function to display weather information
function displayWeather(data) {
    document.getElementById("weather-info").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>🌡 Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>☁ Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>💨 Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}

// Function to display errors
function displayError(message) {
    document.getElementById("weather-info").innerHTML = `<p style="color:red;">⚠ ${message}</p>`;
}
