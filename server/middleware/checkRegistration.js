const db = require('../models/index.js');

const User = db.user;

checkUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (user) {
        res.status(400).send({
          message: 'Username already exists!'
        });
        return;
      }
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: 'Email already exists!'
          });
          return;
        }
        next();
      });
    });
};

const checkRegistration = { checkUsernameOrEmail: checkUsernameOrEmail };

module.exports = checkRegistration;