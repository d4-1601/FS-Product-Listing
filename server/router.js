const Express = require('express');
const { checkRegistration } = require('./middleware/index.js');
const controller = require("./controllers/controller.js");

const router = Express.Router();

router.get('/testing', (req, res) => {
  res.json({ message: 'Testing server and route' });
});

router.post('/signup', checkRegistration.checkUsernameOrEmail, controller.signup);

router.post('/login', controller.login);

  module.exports = router;