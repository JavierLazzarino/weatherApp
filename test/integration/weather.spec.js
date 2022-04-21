const supertest = require('supertest');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const app = require('../../src/app');

const request = supertest(app);
const mockAdapter = new MockAdapter(axios);

const {
  barilocheGeolocation,
  currentWeather,
  currentBarilocheWeather,
  duplicateCityGeolocation,
  forecastWeather,
  forecastBarilocheWeather,
  ipApi,
} = require('../mockedData');

const {
  currentWeatherResponse,
  currentBarilocheWeatherResponse,
  forecastWeatherResponse,
  forecastBarilocheWeatherResponse,
  multipleCitiesResponse,
} = require('../mockedResponses');

const unique_city = 'bariloche,rio negro,ar';
const duplicate_city = 'bariloche';

describe('/current', () => {
  beforeEach(() => {
    mockAdapter.onGet(IP_API_URL).reply(200, ipApi);
    mockAdapter.onGet(`${OPEN_WEATHER_MAP_API_URL}/weather`).reply(200, currentWeather);
  });

  afterEach(() => {
    mockAdapter.resetHistory();
  });

  describe('GET', () => {
    describe('when calling the current endpoint with no parameters', () => {
      const url = '/v1/current';
      it('responds with the client\'s location weather', async () => {
        /*
          I don't see problems with the testing logic or semantics.
          I tried different modification although apparently is something
          that "happens" with supertest:
          https://github.com/visionmedia/supertest/issues/255
        */
        const { status, body, header } = await request.get(url);

        expect(status).toBe(200);
        expect(header['content-type']).toContain('application/json');
        expect(body.data).toStrictEqual(currentWeatherResponse);
        expect(mockAdapter.history.get.length).toBe(2);
      });
    });
  });

  describe('GET', () => {
    describe('when calling the current endpoint with a unique city name', () => {
      const baseOpenWeatherMapUrl = `${OPEN_WEATHER_MAP_API_URL}/weather?appid=${OPEN_WEATHER_MAP_API_KEY}`;
      const { lon, lat } = currentBarilocheWeather.coord;
      mockAdapter.onGet(`${OPEN_WEATHER_GEO_API_URL}/direct?q=${unique_city}&limit=5&appid=${OPEN_WEATHER_MAP_API_KEY}`).reply(200, barilocheGeolocation);
      mockAdapter.onGet(`${baseOpenWeatherMapUrl}&lat=${lat}&lon=${lon}&units=metric`).reply(200, currentBarilocheWeather);
      const url = `/v1/current/${unique_city}`;
      it('responds with the city\'s weather', async () => {
        /*
          I don't see problems with the testing logic or semantics.
          I tried different modification although apparently is something
          that "happens" with supertest:
          https://github.com/visionmedia/supertest/issues/255
        */
        const { status, body, header } = await request.get(url);

        expect(status).toBe(200);
        expect(header['content-type']).toContain('application/json');
        expect(body.data).toStrictEqual(currentBarilocheWeatherResponse);
        expect(mockAdapter.history.get.length).toBe(2);
      });
    });

    describe('when calling the current endpoint with a city name that has more than one result', () => {
      mockAdapter.onGet(`${OPEN_WEATHER_GEO_API_URL}/direct?q=${duplicate_city}&limit=5&appid=${OPEN_WEATHER_MAP_API_KEY}`).reply(200, duplicateCityGeolocation);
      const url = `/v1/current/${duplicate_city}`;
      it('it fails with a message', async () => {
        /*
          I don't see problems with the testing logic or semantics.
          I tried different modification although apparently is something
          that "happens" with supertest:
          https://github.com/visionmedia/supertest/issues/255
        */
        const { status, body, header } = await request.get(url);;

        expect(status).toBe(300);
        expect(body.message).toBe(`We found more than one city under the name of ${duplicate_city}`);
        expect(header['content-type']).toContain('application/json');
        expect(body.data).toStrictEqual(multipleCitiesResponse);
        expect(mockAdapter.history.get.length).toBe(1);
      });
    });
  });
});

describe('/forecast', () => {
  beforeEach(() => {
    mockAdapter.onGet(IP_API_URL).reply(200, ipApi);
    mockAdapter.onGet(`${OPEN_WEATHER_MAP_API_URL}/onecall`).reply(200, forecastWeather);
  });

  afterEach(() => {
    mockAdapter.resetHistory();
  });

  describe('GET', () => {
    describe('when calling the forecast endpoint with no parameters', () => {
      it('responds with the client\'s location forecasted weather', async () => {
        /*
          I don't see problems with the testing logic or semantics.
          I tried different modification although apparently is something
          that "happens" with supertest:
          https://github.com/visionmedia/supertest/issues/255
        */
        const { status, body, header } = await request.get('/v1/forecast');

        expect(status).toBe(200);
        expect(header['content-type']).toContain('application/json');
        expect(body.data).toStrictEqual(forecastWeatherResponse);
        expect(mockAdapter.history.get.length).toBe(2);
      });
    });

    describe('when calling the forecast endpoint with a unique city name', () => {
      const baseOpenWeatherMapUrl = `${OPEN_WEATHER_MAP_API_URL}/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}`;
      const { lon, lat } = forecastBarilocheWeather;
      mockAdapter.onGet(`${OPEN_WEATHER_GEO_API_URL}/direct?q=${unique_city}&limit=5&appid=${OPEN_WEATHER_MAP_API_KEY}`).reply(200, barilocheGeolocation);
      mockAdapter.onGet(`${baseOpenWeatherMapUrl}&exclude=hourly,current,minutely&lat=${lat}&lon=${lon}&units=metric`).reply(200, forecastBarilocheWeather);
      const url = `/v1/forecast/${unique_city}`;
      it('responds with the city\'s forecasted weather', async () => {
        /*
          I don't see problems with the testing logic or semantics.
          I tried different modification although apparently is something
          that "happens" with supertest:
          https://github.com/visionmedia/supertest/issues/255
        */
        const { status, body, header } = await request.get(url);

        expect(status).toBe(200);
        expect(header['content-type']).toContain('application/json');
        expect(body.data).toStrictEqual(forecastBarilocheWeatherResponse);
        expect(mockAdapter.history.get.length).toBe(2);
      });
    });

    describe('when calling the current endpoint with a city name that has more than one result', () => {
      mockAdapter.onGet(`${OPEN_WEATHER_GEO_API_URL}/onecall?q=${duplicate_city}&limit=5&appid=${OPEN_WEATHER_MAP_API_KEY}`).reply(200, duplicateCityGeolocation);
      const url = `/v1/forecast/${duplicate_city}`;
      it('it fails with a message', async () => {
        /*
          I don't see problems with the testing logic or semantics.
          I tried different modification although apparently is something
          that "happens" with supertest:
          https://github.com/visionmedia/supertest/issues/255
        */
        const { status, body, header } = await request.get(url);;

        expect(status).toBe(300);
        expect(body.message).toBe(`We found more than one city under the name of ${duplicate_city}`);
        expect(header['content-type']).toContain('application/json');
        expect(body.data).toStrictEqual(multipleCitiesResponse);
        expect(mockAdapter.history.get.length).toBe(1);
      });
    });
  });
});
