const app = require('./index')
const request = require('supertest')

describe('GET /', () => {
  it('\'/\' should display "Hello World" ', async () => {
    const response = await request(app).get('/');

    // Check if the response status is 200 (OK)
    expect(response.statusCode).toBe(200);

    // Check if the response body (HTML string) contains the exact text
    expect(response.text).toContain('Hello World');
  });
});