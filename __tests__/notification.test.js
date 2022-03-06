const supertest = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const request = supertest(app);

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe('The Server', () => {
  it('gets the test endpoint', async () => {
    const response = await request.get('/notification/test');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('hello');
  });
});
