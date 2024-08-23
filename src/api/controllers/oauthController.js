const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('your_client_id');

exports.authenticate = async (req, res) => {
  const { tokenId } = req.body;
  try {
      const ticket = await client.verifyIdToken({
          idToken: tokenId,
          audience: 'your_client_id'
      });
      const payload = ticket.getPayload();
      res.json(payload);
  } catch (error) {
      res.status(401).send('Invalid token');
  }
};