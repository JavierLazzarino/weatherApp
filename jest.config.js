module.exports = {
  globals: {
    PORT: 3000,
    IP_API_URL: 'http://ip-api.com/json/?fields=lat,lon',
    OPEN_WEATHER_MAP_API_KEY: '0092cb61b005aaa2c12629d392c16436',
    OPEN_WEATHER_MAP_API_URL: 'https://api.openweathermap.org/data/2.5',
    OPEN_WEATHER_GEO_API_URL: 'https://api.openweathermap.org/geo/1.0',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageReporters: [
    'text',
    'cobertura',
  ],
  reporters: [
    'default',
    'jest-junit'
  ]
};
