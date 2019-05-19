const { port, env } = require('./config/vars');
const app = require('./config/express');
const models = require('./models');

app.listen(port, () =>
  console.log('App running on: localhost:' + port + ' env: ' + env)
);
