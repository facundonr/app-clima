let api_key = `589ef447ff0ac3920ec2be2a05c71e54`
let dif_kelvin = 273.15
let url = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById("find-button").addEventListener('click', ()=>{
  const city = document.getElementById("city-input").value

  if(city){
    fetchWeatherData(city)
  }else{
    alert(`Please enter a correct city name`)
  }
})

// Llamada de la API
function fetchWeatherData(city){
  fetch(`${url}?q=${city}&appid=${api_key}`)
  .then(data => data.json())
  .then(data => weatherDataOutput(data))
}

function weatherDataOutput(data){
  console.log(data)
  const weatherData = document.getElementById('weather-data')
  weatherData.innerHTML=''
  const cityName = data.name
  const countryName = data.sys.country
  const tempature = data.main.temp
  const humidity = data.main.humidity
  const description = data.weather[0].description
  const icon = data.weather[0].icon

  const cityTitle = document.createElement('h2')
  cityTitle.textContent = `${cityName}, ${countryName}`

  const iconInfo = document.createElement('img')
  iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
  iconInfo.style.width = '100px'

  const temperatureInfo = document.createElement('p')
  temperatureInfo.textContent = `${Math.floor(tempature-dif_kelvin)} °C`
  temperatureInfo.style.fontSize = '40px'

  const humidityInfo = document.createElement('p')
  humidityInfo.textContent = `Humidity: ${humidity}%`

  const descriptionInfo = document.createElement('p')
  descriptionInfo.textContent = `Description: ${description}`

  weatherData.appendChild(cityTitle)
  weatherData.appendChild(iconInfo)
  weatherData.appendChild(temperatureInfo)
  weatherData.appendChild(humidityInfo)
  weatherData.appendChild(descriptionInfo)
}

