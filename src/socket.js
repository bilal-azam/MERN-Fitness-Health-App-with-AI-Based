const socketIO = require('socket.io');

let io;

exports.init = httpServer => {
  io = socketIO(httpServer);
  return io;
};

exports.getIO = () => {
  if (!io) {
      throw new Error('Socket.io not initialized!');
  }
  return io;
};