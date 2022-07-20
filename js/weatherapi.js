// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weathercond');
const humidity = document.querySelector('#humidity');

const tomTemp = document.querySelector('#tom-temp');
const tomWeatherIcon = document.querySelector('#tom-weather-icon');
const tomCaptionDesc = document.querySelector('#tom-weathercond');
const tomHumidity = document.querySelector('#tom-humidity');

const nextdayTemp = document.querySelector('#nextday-temp');
const nextdayWeatherIcon = document.querySelector('#nextday-weather-icon');
const nextdayCaptionDesc = document.querySelector('#nextday-weathercond');
const nextdayHumidity = document.querySelector('#nextday-humidity');


currentTemp.textContent = "hello";

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.7355&lon=-111.8344&appid=dd54199415411a01c5b963732206c137&units=imperial';


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
  let tempapi = weatherData.current.temp;
  let descrip = weatherData.current.weather[0].description;
  let apihumidity = weatherData.current.humidity;
  let iconSrcUrl = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  

  // currentTemp.innerHTML = `<strong>${tempapi.toFixed(0)}</strong>`;
  currentTemp.innerHTML = tempapi;
  humidity.textContent = `${apihumidity}%`;
  weatherIcon.setAttribute('src', iconSrcUrl);
  weatherIcon.setAttribute('alt', descrip);
  captionDesc.innerHTML = descrip;
  // (chance of rain)

  let tomorrowTempApi = weatherData.daily[0].temp.day;
  let tomdescrip = weatherData.daily[0].weather[0].description;
  let tomapihumidity = weatherData.daily[0].humidity;
  let tomiconSrcUrl = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;

  tomTemp.textContent = tomorrowTempApi;
  tomHumidity.textContent = `${tomapihumidity}%`;
  tomWeatherIcon.setAttribute('src', tomiconSrcUrl);
  tomWeatherIcon.setAttribute('alt', tomdescrip);
  tomCaptionDesc.innerHTML = tomdescrip;

  let nextdayTempApi = weatherData.daily[1].temp.day;
  let nextdaydescrip = weatherData.daily[1].weather[0].description;
  let nextdayapihumidity = weatherData.daily[1].humidity;
  let nextdayiconSrcUrl = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;

  nextdayTemp.textContent = nextdayTempApi;
  console.log(nextdayTempApi);
  nextdayHumidity.textContent = `${nextdayapihumidity}%`;
  nextdayWeatherIcon.setAttribute('src', nextdayiconSrcUrl);
  nextdayWeatherIcon.setAttribute('alt', nextdaydescrip);
  nextdayCaptionDesc.innerHTML = nextdaydescrip;
}

apiFetch(url);

// tomDate
tomDate = document.querySelector('#tomDate');
todayDate = document.querySelector('#todDate');
nextdayDate = document.querySelector('#nextdayDate');

var today = new Date();

const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getUTCDate() + 1)

const nextday = new Date(today);
nextday.setDate(nextday.getUTCDate() + 2);

const monthTom = tomorrow.getUTCMonth();
const dayofmonthTom = tomorrow.getUTCDate();

const monthnextday = nextday.getUTCMonth();
const dayofmonthnextday = nextday.getUTCDate();

const monthTod = today.getUTCMonth();
const dayofmonthTod = today.getUTCDate();


function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}


console.log(monthTom);
console.log(monthTod);
tomDate.textContent = `${toMonthName(monthTom)}, ${dayofmonthTom}`;
todayDate.textContent = `${toMonthName(monthTod)}, ${dayofmonthTod}`;
nextdayDate.textContent = `${toMonthName(monthnextday)}, ${dayofmonthnextday}`


weekdaynextday = nextday.toLocaleString('en-us', {weekday: 'long'});
console.log(weekdaynextday);
dayofweeknextdayhtml = document.querySelector('#dayofweeknextday');
dayofweeknextdayhtml.textContent = weekdaynextday;





