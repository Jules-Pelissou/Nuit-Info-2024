const apikey = "30cae2a002b89550a2ec32a8a6917be8";
let city_name = "";

function getCityName(){
    city_name = document.getElementById("test").value
    getWeather(city_name)
}

async function getWeather(city_name) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);

    const weatherDiv = document.getElementById("weather-info");
    weatherDiv.innerHTML = 
    ` <p>Ville : ${data.name}</p>
      <p>Température : ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>Il fait : <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p>Humidité : ${data.main.humidity}%</p>
      <p>Vitesse du vent : ${data.wind.speed} m/s</p>
      `;
    console.log(data.weather[0].icon);
  } catch (error) {
    console.error(error.message);
    document.getElementById("weather-info").innerText = "Impossible de récupérer les données météo.";
  }
}

getWeather();