const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../schemas/UsersSchema/User');

const api = supertest(app);

const initialUsers = [
  {
    name: 'user 1',
    email: 'user1@gmail.com',
    dateOfBirth: '23 january 2022',
    password: 'I am user 1',
  },
  {
    name: 'user 2',
    email: 'user2@gmail.com',
    dateOfBirth: '23 january 2022',
    password: 'I am user 2',
  },
];

describe('testing for better', () => {
  beforeEach(async () => {
    await User.deleteMany({});
    await User.insertMany(initialUsers);
  });

  test('User are returned as json', async () => {
    const response = await api.get('/notification/all');

    console.log(response.body);
    //   done();

    // expect(200)
    // expect('Content-Type', /application\/json/);
  });
});

// test('notes are returned as json', async () => {
//   await api
//     .get('/api/notes')
//     .expect(200)
//     .expect('Content-Type', /application\/json/);
// });

afterAll(() => {
  mongoose.connection.close();
});
