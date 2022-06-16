const Express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const router = require('./router');
const db = require("./models/index");

const PORT = process.env.PORT;
const app = Express();

app.use(cors())
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

db.sequelize.sync();

async function bootstrap() {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to DB');
  }
};

bootstrap();