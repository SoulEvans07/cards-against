const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

User.associate = function(models) {
  // associations can be defined here
};

module.exports = User;
