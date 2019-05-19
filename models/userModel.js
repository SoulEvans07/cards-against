const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    signupdate: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
  });

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, bcrypt.genSaltSync(10))
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  });

  return User;
};
