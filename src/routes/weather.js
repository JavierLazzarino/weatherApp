const weatherRouter = require('express').Router();
const weather = require('../services/weather');

weatherRouter.get('/current', weather.getCurrentWeather);
weatherRouter.get('/current/:city', weather.getCurrentWeatherForCity);
weatherRouter.get('/forecast', weather.getForecastWeather);
weatherRouter.get('/forecast/:city', weather.getForecastWeatherForCity);

module.exports = {
  weatherRouter,
};
