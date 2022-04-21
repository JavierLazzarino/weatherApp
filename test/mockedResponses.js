const currentWeatherResponse = {
  data: {
    main: 'Clouds',
    description: 'overcast clouds',
    icon: '04d',
    minimumTemperature: 6.09,
    maximumTemperature: 6.09,
    humidity: 58,
    sunrise: 1650453181,
    sunset: 1650491183,
  },
};

const currentBarilocheWeatherResponse = {
  data: {
    main: 'Clouds',
    description: 'few clouds',
    icon: '02d',
    minimumTemperature: 9.31,
    maximumTemperature: 9.31,
    humidity: 43,
    sunrise: 1650453634,
    sunset: 1650492438,
  },
};

const forecastWeatherResponse = [
  {
    sunrise: 1650539658,
    sunset: 1650577482,
    humidity: 57,
    maximumTemperature: 9.62,
    minimumTemperature: 4.96,
    main: 'Rain',
    description: 'moderate rain',
    icon: '10d',
  },
  {
    sunrise: 1650626134,
    sunset: 1650663783,
    humidity: 60,
    maximumTemperature: 8.31,
    minimumTemperature: 2.88,
    main: 'Clouds',
    description: 'overcast clouds',
    icon: '04d',
  },
  {
    sunrise: 1650712611,
    sunset: 1650750085,
    humidity: 54,
    maximumTemperature: 10.41,
    minimumTemperature: 5.84,
    main: 'Rain',
    description: 'moderate rain',
    icon: '10d',
  },
  {
    sunrise: 1650799087,
    sunset: 1650836388,
    humidity: 66,
    maximumTemperature: 8.17,
    minimumTemperature: 4.69,
    main: 'Rain',
    description: 'light rain',
    icon: '10d',
  },
  {
    sunrise: 1650885563,
    sunset: 1650922692,
    humidity: 53,
    maximumTemperature: 8.38,
    minimumTemperature: 2.43,
    main: 'Rain',
    description: 'light rain',
    icon: '10d',
  },
];

const forecastBarilocheWeatherResponse = [
  {
    sunrise: 1650540097,
    sunset: 1650578751,
    humidity: 95,
    maximumTemperature: 7.45,
    minimumTemperature: 4.15,
    main: 'Rain',
    description: 'moderate rain',
    icon: '10d',
  },
  {
    sunrise: 1650626561,
    sunset: 1650665065,
    humidity: 95,
    maximumTemperature: 7,
    minimumTemperature: 3.11,
    main: 'Rain',
    description: 'light rain',
    icon: '10d',
  },
  {
    sunrise: 1650713024,
    sunset: 1650751380,
    humidity: 79,
    maximumTemperature: 7.09,
    minimumTemperature: 3.03,
    main: 'Rain',
    description: 'heavy intensity rain',
    icon: '10d',
  },
  {
    sunrise: 1650799487,
    sunset: 1650837696,
    humidity: 96,
    maximumTemperature: 5.8,
    minimumTemperature: 5.01,
    main: 'Rain',
    description: 'heavy intensity rain',
    icon: '10d',
  },
  {
    sunrise: 1650885951,
    sunset: 1650924013,
    humidity: 100,
    maximumTemperature: 4.59,
    minimumTemperature: 2.78,
    main: 'Snow',
    description: 'rain and snow',
    icon: '13d',
  },
];

const multipleCitiesResponse = [
  {
    name: 'San Carlos de Bariloche',
    lat: -41.1334421,
    lon: -71.3098425,
    country: 'AR',
    state: 'Río Negro Province'
  },
  {
    name: 'Bariloche',
    lat: 4.6835368,
    lon: -75.6498382,
    country: 'CO',
    state: 'Quindío'
  }
];

module.exports = {
  currentWeatherResponse,
  currentBarilocheWeatherResponse,
  forecastWeatherResponse,
  forecastBarilocheWeatherResponse,
  multipleCitiesResponse,
};
