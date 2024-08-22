const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
      wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
              client.send(message);
          }
      });
  });
});

exports.sendNotification = (req, res) => {
  const { message } = req.body;
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(message);
      }
  });
  res.send('Notification sent');
};