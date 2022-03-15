const mongoose = require('mongoose');
const supertest = require('supertest');
const mockApp = require('../../../mockApp');

const api = supertest(mockApp);

// jest.mock('./NotificationController.js');

describe('test', () => {
  test('my first test', async () => {
    const response = await api.get('/notification/all');
    expect(response.body.length).toBe(11);
  });

  test('should return 201 after creation', async () => {
    const response1 = await api.get('/notification/all');
    const response2 = await api.post('/notification/add').send({
      _id: '621a7604dcd296f259e277b8',
      title: 'Notification3',
      email: 'user2@gmail.com',
      date: '02/02/2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
    });
    const isAdded = response1.body.length === response2.body.length - 1;
    expect(isAdded).toBe(true);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
