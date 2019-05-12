const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const User = db.define('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  signupdate: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW }
});

User.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new Error();
    });
});

User.associate = function (models) {
  // associations can be defined here
};

module.exports = User;
