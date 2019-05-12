const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example'),
  allowEmptyValues: true
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  host: process.env.NODE_ENV === 'dev' ? (process.env.HOST || 'http://127.0.0.1') : process.env.HOST,
  publicPath: path.join(__dirname, '../public'),
  routesPath: path.join(__dirname, '../routes'),
  db: {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME
  },
  auth: {
    jwt: {
      secret: process.env.SECRET
    }
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
};
