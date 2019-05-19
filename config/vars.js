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
  host: process.env.NODE_ENV === 'development' ? (process.env.HOST || 'http://127.0.0.1') : process.env.HOST,
  publicPath: path.join(__dirname, '../public'),
  routesPath: path.join(__dirname, '../routes'),
  auth: {
    jwt: {
      secret: process.env.SECRET
    }
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
};
