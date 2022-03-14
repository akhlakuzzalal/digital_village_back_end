const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../app');
const Notifications = require('../schemas/NotificationsSchema/NotificationsSchema');

chai.should();
chai.use(chaihttp);

const newNotification = {
  title: 'Notification 10',
  email: 'user2@gmail.com',
  date: '02/02/2022',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
};

const notification = new Notifications(newNotification);

describe('Notification Api', function () {
  // Test GET
  describe('Get All Notifications', function () {
    it('it should return a list of posts', function (done) {
      chai
        .request(app)
        .get('/notification/all')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.a('array');
          response.should.have.lengthOf(100);
        });
      done();
    });
  });
  describe('Post Notifications', function () {
    it('should found the notification name after adding', function (done) {
      chai
        .request(app)
        .post('/notification/add')
        .send(notification)
        .end((err, response) => {
          console.log(response.title);
          response.title.should.be.a('string');
          response.title.should.be.equal(newNotification.title);
          response.should.have.status(200);
        });
      done();
    });
  });
});
