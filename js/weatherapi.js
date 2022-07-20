// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weathercond');
const humidity = document.querySelector('#humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Logan&appid=dd54199415411a01c5b963732206c137&units=imperial';


async function apiFetch(apiurl) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}


function displayResults(weatherData) {
  let tempapi = weatherData.main.temp;
  let descrip = weatherData.weather[0].description;
  let apihumidity = weatherData.main.humidity;
  let iconSrcUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
  currentTemp.innerHTML = `<strong>${tempapi.toFixed(0)}</strong>`;
  humidity.innerHTML = `${apihumidity}%`;
  weatherIcon.setAttribute('src', iconSrcUrl);
  weatherIcon.setAttribute('alt', descrip);
  captionDesc.innerHTML = descrip;
  // (chance of rain)

}

apiFetch(url);
