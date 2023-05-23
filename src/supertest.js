const request = require('supertest');
const app = require('../app');

describe('Checking indexpage functionallity', function () {
  it('should return 200', function () {
    return request(app).get('/').expect(200);
  });
});
