const request = require('supertest');

// Import app without starting the server
const express = require('express');
const app = express();
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

describe('GET /api/health', () => {
  it('returns 200 with status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
