const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models/index.js');

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({
      message: 'A token i needed!'
    });
  }
  jwt.verify(token, config.secret, (error, decoding) => {
    if (error) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }
    req.userId = decoding.id;
    next();
  });
};

const authJwt = { verifyToken: verifyToken };

module.exports = authJwt;