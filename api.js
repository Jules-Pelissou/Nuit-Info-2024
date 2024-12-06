const apikey = "30cae2a002b89550a2ec32a8a6917be8";
let city_name = "";

function getCityName(){
    city_name = document.getElementById("test").value
    getWeather(city_name)
}

async function getWeather(city_name, isEndingResult = false, phrase1, phrase2, phrase3, phrase4, phrase5) {

  console.log(isEndingResult);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    
    if (!isEndingResult){
      var weatherDiv = document.getElementById("weather-info");
      phrase1 = "Ville : ";
      phrase2 = "Température : ";
      phrase3 = "Il y a ";
      phrase4 = "Humidité ";
      phrase5 = "Vitesse du vent ";
      console.log(weatherDiv);
    }else{
      var weatherDiv = document.getElementById("result");
    }
    weatherDiv.innerHTML = 
    ` <p>${phrase1} ${data.name}</p>
      <p>${phrase2} ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>${phrase3} : <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p>${phrase4} : ${data.main.humidity}%</p>
      <p>${phrase5} : ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error(error.message);
    document.getElementById("weather-info").innerText = "Impossible de récupérer les données météo.";
  }
}