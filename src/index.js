const http = require('http');
const socketIO = require('./socket');

const server = http.createServer(app);
socketIO.init(server);
server.listen(process.env.PORT || 3000);