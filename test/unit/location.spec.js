const axios = require('axios');
const { getCityLatitudeAndLogitude } = require('../../src/utils/locationResolvers');

jest.mock('axios');

const {
  barilocheGeolocation,
} = require('../mockedData');

const {
  multipleCitiesResponse,
} = require('../mockedResponses');

const non_existing_city = 'bariloche,buenos aires,ar';
const unique_city = 'bariloche,rio negro,ar';
const duplicate_city = 'bariloche';

describe('getCityLatitudeAndLogitude', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('with a unique city name', () => {
    it('responds with its latitude and longitude', async () => {
      axios.get.mockResolvedValue({
        statusText: 'OK',
        data: barilocheGeolocation,
      });
      const { data, message, status } = await getCityLatitudeAndLogitude(unique_city);

      expect(status).toBe(200);
      expect(message).toBe('OK');
      expect(data).toStrictEqual({
        lat: barilocheGeolocation[0].lat,
        lon: barilocheGeolocation[0].lon,
      });
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('with a city name with more than one result', () => {
    it('responds with a message and and array of cities', async () => {
      axios.get.mockResolvedValue({
        status: 200,
        statusText: `We found more than one city under the name of ${duplicate_city}`,
        data: multipleCitiesResponse,
      });
      const { data, message, status } = await getCityLatitudeAndLogitude(duplicate_city);

      expect(status).toBe(300);
      expect(message).toBe(`We found more than one city under the name of ${duplicate_city}`);
      expect(data).toStrictEqual(multipleCitiesResponse);
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('with a city name with no results', () => {
    it('responds with a message', async () => {
      axios.get.mockResolvedValue({
        status: 404,
        statusText: `We were not able to find a city under the name of ${non_existing_city}`,
        data: null,
      });
      const response = await getCityLatitudeAndLogitude(non_existing_city);
      const { data, message, status } = response;

      expect(status).toBe(404);
      expect(message).toBe(`We were not able to find a city under the name of ${non_existing_city}`);
      expect(data).toBe(null);
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });
});
