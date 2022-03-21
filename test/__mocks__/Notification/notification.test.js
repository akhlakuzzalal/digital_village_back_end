const api = require('../../setup');
describe('test notification api is working properly', () => {
  test('Initially there should be 11 notification', async () => {
    const response = await api.get('/notification/all');
    expect(response.body.length).toBe(11);
  });

  test('should return 201 after creation and increase 1', async () => {
    const response1 = await api.get('/notification/all'); // 11
    const response2 = await api.post('/notification/add').send({
      title: 'Notification3',
      email: 'user2@gmail.com',
      date: '02/02/2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
    }); // 12
    const isAdded = response1.body.length === response2.body.length - 1;
    expect(isAdded).toBe(true);
    expect(response2.status).toBe(201);
  });

  test('should return 204 after deletion', async () => {
    const response1 = await api.get('/notification/all');
    const response2 = await api.post('/notification/delete').query({
      _id: '621a7604dcd296f259e277b8',
    });

    // const isRemoved = response1.body.length - 1 === response2.body.length;
    // expect(isRemoved).toBe(true);
    expect(response2.status).toBe(204);
  });

  test('should contain _id in the response body after adding post', async () => {
    const response = await api.post('/notification/addOne').send({
      title: 'Notification3',
      email: 'user2@gmail.com',
      date: '02/02/2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
    });

    expect(response.body._id).toBeDefined();
  });
});
