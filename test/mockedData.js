const barilocheGeolocation = [
  {
    name: 'San Carlos de Bariloche',
    local_names: {
      ko: '산카를로스데바릴로체',
      gn: 'Bariloche',
      eo: 'Bariloĉe',
      en: 'San Carlos de Bariloche',
      af: 'Bariloche',
      is: 'Bariloche',
      nl: 'Bariloche (Río Negro)',
      zh: '圣卡洛斯-德巴里洛切',
      es: 'San Carlos de Bariloche',
      pt: 'Bariloche',
      bg: 'Сан Карлос де Барилоче',
      lt: 'San Karlos de Bariločė',
      ja: 'サン・カルロス・デ・バリローチェ',
      ka: 'სან-კარლოს-დე-ბარილოჩე',
      fa: 'باریلوچه',
      pl: 'Bariloche',
      ru: 'Сан-Карлос-де-Барилоче',
      uk: 'Сан-Карлос-де-Барілоче',
      hy: 'Սան Կառլոս դե Բարիլոչե',
      ar: 'باريلوتشي',
      de: 'Bariloche',
      he: "בארילוצ'ה",
    },
    lat: -41.1334421,
    lon: -71.3098425,
    country: 'AR',
    state: 'Río Negro Province'
  },
];

const currentBarilocheWeather = {
  coord: { lon: -71.3098, lat: -41.1334 },
  weather: [
    { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }
  ],
  base: 'stations',
  main: {
    temp: 9.31,
    feels_like: 4.74,
    temp_min: 9.31,
    temp_max: 9.31,
    pressure: 1019,
    humidity: 43
  },
  visibility: 10000,
  wind: { speed: 12.86, deg: 290 },
  clouds: { all: 20 },
  dt: 1650483499,
  sys: {
    type: 1,
    id: 8315,
    country: 'AR',
    sunrise: 1650453634,
    sunset: 1650492438
  },
  timezone: -10800,
  id: 7647007,
  name: 'Bariloche',
  cod: 200
};

const currentWeather = {
  coord: { lat: -45.6083, lon: -67.75 },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    }
  ],
  base: 'stations',
  main: {
    temp: 6.09,
    feels_like: 3.74,
    temp_min: 6.09,
    temp_max: 6.09,
    pressure: 1010,
    humidity: 58,
    sea_level: 1010,
    grnd_level: 935,
  },
  visibility: 10000,
  wind: { speed: 9.76, deg: 282, gust: 16.18 },
  clouds: { all: 32 },
  dt: 1650423915,
  sys: {
    type: 1,
    id: 8284,
    country: 'AR',
    sunrise: 1650453181,
    sunset: 1650491183,
  },
  timezone: -10800,
  id: 3856122,
  name: 'Escalante',
  cod: 200,
};

const currentForecast = {
  data: {
    lat: -45.6083,
    lon: -67.75,
    timezone: 'America/Argentina/Catamarca',
    timezone_offset: -10800,
    daily: [
      {"dt":1650470400,"sunrise":1650453181,"sunset":1650491183,"moonrise":1650500640,"moonset":1650470520,"moon_phase":0.64,"temp":{"day":8.42,"min":5.49,"max":11.34,"night":7.13,"eve":9.33,"morn":5.79},"feels_like":{"day":3.61,"night":2.6,"eve":5.07,"morn":0.5},"pressure":1012,"humidity":49,"dew_point":-1.47,"wind_speed":12.47,"wind_deg":278,"wind_gust":18.1,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":94,"pop":0,"uvi":2.79},{"dt":1650556800,"sunrise":1650539658,"sunset":1650577482,"moonrise":1650590700,"moonset":1650561120,"moon_phase":0.68,"temp":{"day":9.62,"min":4.96,"max":9.62,"night":4.96,"eve":5.77,"morn":6.76},"feels_like":{"day":6.04,"night":-0.81,"eve":0.56,"morn":2.13},"pressure":995,"humidity":57,"dew_point":1.97,"wind_speed":12.25,"wind_deg":178,"wind_gust":16.96,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":1,"rain":6,"uvi":0.54},{"dt":1650643200,"sunrise":1650626134,"sunset":1650663783,"moonrise":1650681360,"moonset":1650650940,"moon_phase":0.72,"temp":{"day":7.37,"min":2.88,"max":8.31,"night":7.36,"eve":7.07,"morn":2.88},"feels_like":{"day":3.69,"night":3.44,"eve":4.42,"morn":1.01},"pressure":1003,"humidity":60,"dew_point":0.62,"wind_speed":10.31,"wind_deg":186,"wind_gust":13.37,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":88,"pop":0.59,"uvi":1.27},{"dt":1650729600,"sunrise":1650712611,"sunset":1650750085,"moonrise":0,"moonset":1650739920,"moon_phase":0.75,"temp":{"day":9.03,"min":5.84,"max":10.41,"night":7.26,"eve":8.42,"morn":5.89},"feels_like":{"day":3.28,"night":1.74,"eve":2.57,"morn":-0.79},"pressure":978,"humidity":54,"dew_point":0.58,"wind_speed":20.18,"wind_deg":266,"wind_gust":27.49,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":15,"pop":0.96,"rain":2.5,"uvi":2.49},{"dt":1650816000,"sunrise":1650799087,"sunset":1650836388,"moonrise":1650772320,"moonset":1650828300,"moon_phase":0.79,"temp":{"day":6.77,"min":4.69,"max":8.17,"night":4.69,"eve":6.14,"morn":5.23},"feels_like":{"day":1.1,"night":-1.88,"eve":-0.12,"morn":0.87},"pressure":979,"humidity":66,"dew_point":1.37,"wind_speed":18.87,"wind_deg":277,"wind_gust":23.44,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.38,"rain":1.2,"uvi":0.12},{"dt":1650902400,"sunrise":1650885563,"sunset":1650922692,"moonrise":1650863340,"moonset":1650916320,"moon_phase":0.83,"temp":{"day":5.91,"min":2.43,"max":8.38,"night":7.57,"eve":5.43,"morn":2.43},"feels_like":{"day":1.37,"night":2.64,"eve":0.01,"morn":-2.41},"pressure":999,"humidity":53,"dew_point":-2.53,"wind_speed":14.66,"wind_deg":275,"wind_gust":21.68,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.86,"rain":2.26,"uvi":1},{"dt":1650988800,"sunrise":1650972040,"sunset":1651008997,"moonrise":1650954240,"moonset":1651004040,"moon_phase":0.86,"temp":{"day":3.15,"min":0.68,"max":8.24,"night":3.69,"eve":4.97,"morn":1.79},"feels_like":{"day":-2.29,"night":-2.95,"eve":-1.1,"morn":-5.21},"pressure":997,"humidity":39,"dew_point":-8.85,"wind_speed":13.97,"wind_deg":288,"wind_gust":20.96,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":62,"pop":0.65,"rain":0.74,"uvi":1},{"dt":1651075200,"sunrise":1651058516,"sunset":1651095303,"moonrise":1651044960,"moonset":1651091640,"moon_phase":0.89,"temp":{"day":-0.75,"min":-0.75,"max":3.35,"night":-0.54,"eve":1.36,"morn":2.69},"feels_like":{"day":-7.68,"night":-3.61,"eve":-2.9,"morn":1.16},"pressure":1005,"humidity":97,"dew_point":-0.7,"wind_speed":10.29,"wind_deg":298,"wind_gust":16.34,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":100,"pop":0.87,"snow":5.26,"uvi":1}
    ],
  },
};

const duplicateCityGeolocation = [
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

const ipApi = {
  data: {
    lat: -45.6083,
    lon: -67.75
  },
  message: "OK",
};

const forecastBarilocheWeather = {
  lat: -41.1334,
  lon: -71.3098,
  timezone: 'America/Argentina/Salta',
  timezone_offset: -10800,
  daily: [
    {
      dt: 1650470400,
      sunrise: 1650453634,
      sunset: 1650492438,
      moonrise: 1650502740,
      moonset: 1650470280,
      moon_phase: 0.64,
      temp: {
        day: 8.33,
        min: 4.75,
        max: 9.26,
        night: 5.74,
        eve: 7.02,
        morn: 5.37
      },
      feels_like: { day: 5.33, night: 2.7, eve: 3.92, morn: 2.46 },
      pressure: 1020,
      humidity: 55,
      dew_point: -2.21,
      wind_speed: 5.78,
      wind_deg: 272,
      wind_gust: 8.56,
      weather: [ { id: 500, main: 'Rain', description: 'light rain', icon: '10d' } ],
      clouds: 39,
      pop: 0.38,
      rain: 0.31,
      uvi: 2.67
    },
    {
      dt: 1650556800,
      sunrise: 1650540097,
      sunset: 1650578751,
      moonrise: 1650592800,
      moonset: 1650560760,
      moon_phase: 0.68,
      temp: {
        day: 5.21,
        min: 4.15,
        max: 7.45,
        night: 5.48,
        eve: 5.88,
        morn: 4.45
      },
      feels_like: { day: 1.63, night: 1.75, eve: 1.79, morn: 0.41 },
      pressure: 1005,
      humidity: 95,
      dew_point: 2.56,
      wind_speed: 7.63,
      wind_deg: 270,
      wind_gust: 19.09,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: 96,
      pop: 1,
      rain: 16.52,
      uvi: 0.75
    },
    {
      dt: 1650643200,
      sunrise: 1650626561,
      sunset: 1650665065,
      moonrise: 0,
      moonset: 1650650640,
      moon_phase: 0.72,
      temp: { day: 5.72, min: 3.11, max: 7, night: 6.21, eve: 6.52, morn: 3.29 },
      feels_like: { day: 3.26, night: 1.92, eve: 3.5, morn: 0.04 },
      pressure: 1011,
      humidity: 95,
      dew_point: 3.02,
      wind_speed: 7.44,
      wind_deg: 289,
      wind_gust: 19.92,
      weather: [ { id: 500, main: 'Rain', description: 'light rain', icon: '10d' } ],
      clouds: 100,
      pop: 0.53,
      rain: 0.8,
      uvi: 0.65
    },
    {
      dt: 1650729600,
      sunrise: 1650713024,
      sunset: 1650751380,
      moonrise: 1650683340,
      moonset: 1650739800,
      moon_phase: 0.75,
      temp: {
        day: 6.61,
        min: 3.03,
        max: 7.09,
        night: 4.95,
        eve: 4.98,
        morn: 3.78
      },
      feels_like: { day: 2.43, night: 0.75, eve: 0.65, morn: -0.55 },
      pressure: 1000,
      humidity: 79,
      dew_point: 1.31,
      wind_speed: 8.77,
      wind_deg: 298,
      wind_gust: 21.83,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d'
        }
      ],
      clouds: 35,
      pop: 1,
      rain: 29.9,
      uvi: 3.22
    },
    {
      dt: 1650816000,
      sunrise: 1650799487,
      sunset: 1650837696,
      moonrise: 1650774180,
      moonset: 1650828420,
      moon_phase: 0.79,
      temp: { day: 5.8, min: 5.01, max: 5.8, night: 5.16, eve: 5.45, morn: 5.5 },
      feels_like: { day: 2.78, night: 2.17, eve: 2.3, morn: 1.37 },
      pressure: 995,
      humidity: 96,
      dew_point: 3.29,
      wind_speed: 6.76,
      wind_deg: 324,
      wind_gust: 17.29,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d'
        }
      ],
      clouds: 100,
      pop: 1,
      rain: 53.4,
      uvi: 0.44
    },
    {
      dt: 1650902400,
      sunrise: 1650885951,
      sunset: 1650924013,
      moonrise: 1650864900,
      moonset: 1650916620,
      moon_phase: 0.83,
      temp: {
        day: 3.43,
        min: 2.78,
        max: 4.59,
        night: 3.79,
        eve: 3.47,
        morn: 2.97
      },
      feels_like: { day: 1.58, night: 3.79, eve: 3.47, morn: 1.44 },
      pressure: 1005,
      humidity: 100,
      dew_point: 1.45,
      wind_speed: 2.68,
      wind_deg: 326,
      wind_gust: 5.76,
      weather: [
        {
          id: 616,
          main: 'Snow',
          description: 'rain and snow',
          icon: '13d'
        }
      ],
      clouds: 100,
      pop: 1,
      rain: 29.06,
      snow: 9.02,
      uvi: 1
    },
    {
      dt: 1650988800,
      sunrise: 1650972414,
      sunset: 1651010331,
      moonrise: 1650955560,
      moonset: 1651004580,
      moon_phase: 0.86,
      temp: {
        day: 3.53,
        min: 1.18,
        max: 4.71,
        night: 1.18,
        eve: 2.25,
        morn: 2.49
      },
      feels_like: { day: -1.18, night: -4.55, eve: -2.96, morn: -0.38 },
      pressure: 997,
      humidity: 93,
      dew_point: 0.55,
      wind_speed: 7.85,
      wind_deg: 299,
      wind_gust: 18.24,
      weather: [
        {
          id: 616,
          main: 'Snow',
          description: 'rain and snow',
          icon: '13d'
        }
      ],
      clouds: 78,
      pop: 0.94,
      rain: 2.5,
      snow: 12.25,
      uvi: 1
    },
    {
      dt: 1651075200,
      sunrise: 1651058877,
      sunset: 1651096651,
      moonrise: 1651046100,
      moonset: 1651092360,
      moon_phase: 0.89,
      temp: {
        day: 3.24,
        min: -1.58,
        max: 3.98,
        night: -0.58,
        eve: 2.71,
        morn: -1.07
      },
      feels_like: { day: 0.84, night: -4.43, eve: -0.46, morn: -3.24 },
      pressure: 1009,
      humidity: 87,
      dew_point: -0.63,
      wind_speed: 4.72,
      wind_deg: 283,
      wind_gust: 9.08,
      weather: [ { id: 601, main: 'Snow', description: 'snow', icon: '13d' } ],
      clouds: 40,
      pop: 0.8,
      snow: 4.65,
      uvi: 1
    }
  ]
}

module.exports = {
  barilocheGeolocation,
  currentWeather,
  currentBarilocheWeather,
  currentForecast,
  duplicateCityGeolocation,
  forecastBarilocheWeather,
  ipApi,
};
