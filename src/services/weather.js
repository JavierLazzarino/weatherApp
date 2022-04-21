const axios = require('axios');
const { OPEN_WEATHER_MAP_API_KEY, OPEN_WEATHER_MAP_API_URL } = require('../config');

const { getClientLocation, getCityLatitudeAndLogitude } = require('../utils/locationResolvers');

async function getClientLatitudeAndLogitude() {
  const clientLocation = await getClientLocation();

  return clientLocation.data;
}

async function getCurrentWeather(req, res) {
  const { lat, lon } = req.lat && req.lon ? req : await getClientLatitudeAndLogitude();

  const open_weather_api_url = `${OPEN_WEATHER_MAP_API_URL}/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&lat=${lat}&lon=${lon}&units=metric`;

  let response = {}

  await axios.get(open_weather_api_url)
    .then((result) => {
      const { main, description, icon } = result.data.weather[0];
      const { temp_min: minimumTemperature, temp_max: maximumTemperature, humidity } = result.data.main;
      const { sunrise, sunset } = result.data.sys;

      response = {
        data: {
          main,
          description,
          icon,
          minimumTemperature,
          maximumTemperature,
          humidity,
          sunrise,
          sunset,
        },
        message: result.message,
        status: result.status,
      };
    }).catch((error) => {
      response = {
        data: null,
        message: error.message,
        status: error.response.status,
      };
    });

  return res.status(response.status).json({
    data: response.data,
    message: response.message,
  });
}

async function getForecastWeather(req, res) {
  const { lat, lon } = req.lat && req.lon ? req : await getClientLatitudeAndLogitude();

  const open_weather_api_url = `${OPEN_WEATHER_MAP_API_URL}/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=hourly,current,minutely&lat=${lat}&lon=${lon}&units=metric`;

  let response = {}

  await axios.get(open_weather_api_url)
    .then((result) => {
      const data = [];
      result.data.daily.slice(1, 6).forEach((day) => {
        const { sunrise, sunset, humidity } = day;
        const { max: maximumTemperature, min: minimumTemperature } = day.temp;
        const { main, description, icon } = day.weather[0];

        data.push({
          sunrise,
          sunset,
          humidity,
          maximumTemperature,
          minimumTemperature,
          main,
          description,
          icon,
        });
      });

      response = {
        data,
        message: result.message,
        status: result.status,
      };
    }).catch((error) => {
      response = {
        data: null,
        message: error.message,
        status: error.response.status,
      };
    });

  return res.status(response.status).json({
    data: response.data,
    message: response.message,
  });
}

async function getCurrentWeatherForCity(req, res) {
  const { city } = req.params;

  const response = await getCityLatitudeAndLogitude(city);

  if (response.status === 200) {
    req = {
      ...req,
      lat: response.data.lat,
      lon: response.data.lon,
    };
    await getCurrentWeather(req, res);
  } else {
    return res.status(response.status).json({
      data: response.data,
      message: response.message,
    });
  }
}

async function getForecastWeatherForCity(req, res) {
  const { city } = req.params;

  const response = await getCityLatitudeAndLogitude(city);

  if (response.status === 200) {
    req = {
      ...req,
      lat: response.data.lat,
      lon: response.data.lon,
    };
    await getForecastWeather(req, res);
  } else {
    return res.status(response.status).json({
      data: response.data,
      message: response.message,
    });
  }
}

module.exports = {
  getCurrentWeather,
  getCurrentWeatherForCity,
  getForecastWeather,
  getForecastWeatherForCity,
}
