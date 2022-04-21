const axios = require('axios');
const CustomError = require('../model/customError');

const { IP_API_URL, OPEN_WEATHER_MAP_API_KEY, OPEN_WEATHER_GEO_API_URL } = require('../config');

async function getClientLocation() {
  let response = {};

  await axios.get(IP_API_URL)
    .then((result) => {
      response = {
        data: result.data,
        message: result.statusText,
        status: result.status,
      };
    }).catch((error) => {
      response = {
        data: null,
        message: error.message,
        status: error.status,
      };
    });

  return response;
}

async function getCityLatitudeAndLogitude(city) {
  const url = `${OPEN_WEATHER_GEO_API_URL}/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_MAP_API_KEY}`;

  let response = {};

  await axios.get(url)
    .then((result) => {
      if (!result.data) {
        throw new CustomError(`We were not able to find a city under the name of ${city}`, 404, null);
      } else if (result.data.length > 1) {
        result.data.forEach((cityDefinition) => {
          delete cityDefinition.local_names;
        });
        throw new CustomError(`We found more than one city under the name of ${city}`, 300, result.data);
      }

      const { lat, lon } = result.data[0];
      response = {
        data: {
          lat,
          lon,
        },
        message: result.statusText,
        status: 200,
      };
    }).catch((error) => {
      response = {
        data: error.data,
        message: error.statusText,
        status: error.status,
      };
    });

  return response;
}

module.exports = {
  getClientLocation,
  getCityLatitudeAndLogitude,
};
