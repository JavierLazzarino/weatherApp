const supertest = require('supertest');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const app = require('../../src/app');

const { ipApi } = require('../mockedData');
const mockAdapter = new MockAdapter(axios);

const request = supertest(app);

describe('/location', () => {
  beforeEach(() => {
    mockAdapter.onGet(IP_API_URL).reply(200, ipApi);
  });

  afterEach(() => {
    mockAdapter.resetHistory();
  });

  describe('GET', () => {
    it('responds with the client\'s latitude and logitude', async () => {
      const { status, body, header } = await request.get('/v1/location');

      expect(status).toBe(200);
      expect(header['content-type']).toContain('application/json');
      expect(body.data).toStrictEqual({ data: { lat: -45.6083, lon: -67.75 }, message: 'OK' });
      expect(mockAdapter.history.get.length).toBe(1);
    });
  });
});
