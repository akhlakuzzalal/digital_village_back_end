import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

const socketController = () => {
  io.on('connection', (socket) => {
    socket.on('message', ({ name, message }) => {
      io.emit('message', { name, message });
    });
  });
};

httpServer.listen(3000);

module.exports = {
  socketController,
};
