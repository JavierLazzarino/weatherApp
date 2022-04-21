const request = require('supertest');
const app = require('../../src/app');

describe('/healthcheck', () => {
  describe('GET', () => {
    it('responds with an alive message', (done) => {
      request(app)
        .get('/v1/healthcheck')
        .expect(200)
        .end((err, res) => {
          expect(res.text).toEqual('Alive!');
          done();
        });
    });
  });
});
