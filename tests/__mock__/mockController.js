const user = [
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

const getAllUser = () => {
  return user;
};

module.exports = {
  getAllUser,
};
