const { Server } = require('socket.io');
const { server } = require('..');

const socketController = () => {
  const io = new Server(server, {
    /* options */
  });
  console.log('hitting');
  io.on('connection', (socket) => {
    console.log('connect to socket');
  });
};

module.exports = {
  socketController,
};
