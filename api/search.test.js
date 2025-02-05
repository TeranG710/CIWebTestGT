// search.test.js
const request = require('supertest');
const app = require('../app'); // our Express application

describe('GET /search', () => {
  it('should return results for a valid query', async () => {
    // Send a GET request to /search with a valid query parameter
    const response = await request(app).get('/search?query=test');
    // Expect a 200 OK status
    expect(response.status).toBe(200);
    // Expect the response body to contain a "results" property
    expect(response.body).toHaveProperty('results');
  });

  it('should handle empty query gracefully', async () => {
    // Send a GET request to /search with an empty query parameter
    const response = await request(app).get('/search?query=');
    // Expect a 400 Bad Request status (assuming our API returns 400 for invalid queries)
    expect(response.status).toBe(400);
  });
});

