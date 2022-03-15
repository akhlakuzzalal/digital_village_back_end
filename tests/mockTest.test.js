const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../mockApp');

const api = supertest(app);

describe('user api test', () => {
  test('User length is 2', async () => {
    const response = await api.get('/user/add');

    console.log(response);

    expect(response.length).toBe(2);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
