const Express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const router = require('./router');

const PORT = process.env.PORT;
const app = Express();

app.use(cors())
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});