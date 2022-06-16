const Express = require('express');

const router = Express.Router();

router.get('/testing', (req, res) => {
  res.json({ message: "Testing server and router" });
});

module.exports = router;