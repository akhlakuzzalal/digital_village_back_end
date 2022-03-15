const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../schemas/UsersSchema/User');

const api = supertest(app);

// const initialUsers = [
//   {
//     name: 'user 1',
//     email: 'user1@gmail.com',
//     dateOfBirth: '23 january 2022',
//     password: 'I am user 1',
//   },
//   {
//     name: 'user 2',
//     email: 'user2@gmail.com',
//     dateOfBirth: '23 january 2022',
//     password: 'I am user 2',
//   },
// ];

describe('notification api test', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    await User.insertMany(initialUsers);
  });

  test('User length should be 2', async () => {
    const response = await api.get('/notification/all');

    console.log(response.body);
    //   done();

    // expect(200)
    // expect('Content-Type', /application\/json/);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
