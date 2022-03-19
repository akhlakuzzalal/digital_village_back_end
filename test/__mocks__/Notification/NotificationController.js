let notifications = [
  {
    _id: '621a7604dcd296f259e277b8',
    title: 'Notification3',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '621a7608dcd296f259e277ba',
    title: 'Notification4',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fbab78510c997ecfb7c51',
    title: 'Notification2',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fbf91994a69a9f49a81b4',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fbfd7dec5d11cb1689fc4',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fc0228dd218e4a97b1026',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fc04602a35c7fefc7c1e9',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fc09e26e0346f8cd2cf9a',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fc1b101b4dfc6bd3fe467',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fc1cb4f87f343e7c0c567',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
  {
    _id: '622fc20600c29dfa83a55867',
    title: 'Notification 10',
    email: 'user2@gmail.com',
    date: '02/02/2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ad sed, dolorum beatae asperiores corporis vero quam harum officia culpa delectus nulla pariatur possimus error quo voluptates provident. Molestiae, facilis. Nobis quam atque, culpa odit ad eaque quidem totam cumque. Obcaecati consectetur voluptate fugit aspernatur amet voluptatem harum consequatur minima!',
  },
];

const getAllNotification = (req, res) => {
  res.json(notifications);
};

const addANotification = (req, res) => {
  const newNotification = req.body;
  notifications.push(newNotification);
  res.status(201).json(notifications);
};

const addOneNotification = (req, res) => {
  res.json({ _id: 0 });
};

const deleteANotification = (req, res) => {
  const { _id } = req.query;
  const filteredNotificaitons = notifications.filter((n) => n._id !== _id);
  notifications = filteredNotificaitons;
  res.status(204);
  res.json(notifications);
};

module.exports = {
  getAllNotification,
  addANotification,
  deleteANotification,
  addOneNotification,
};
