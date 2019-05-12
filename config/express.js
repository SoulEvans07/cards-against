const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { publicPath } = require('./vars');
const { routesPath } = require('./vars');
const { logs } = require('./vars');

const app = express();

app.use(morgan(logs));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(helmet());
app.use('/static', express.static(publicPath));

const router = express.Router();
const routes = require('require-all')({
  dirname: routesPath,
  filter: /.+\.js$/
});

_.mapValues(routes, (value, key) => {
  const path = key.replace('.js', '');
  router.use('/' + path, value);
});

router.use('/', function (req, res) {
  res.send("Up and running!");
});

app.use(router);

module.exports = app;
