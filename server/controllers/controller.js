const db = require('../models/index.js');
const config = require('../config/auth.config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = db.user;

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(() => {
      res.status(201).send({ message: 'New user registered!' });
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found!' });
      }

      const passwordIsValid = bcrypt.compareSync( req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Wrong Password!'
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 3600 });
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
};