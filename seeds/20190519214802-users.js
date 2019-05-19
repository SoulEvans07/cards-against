'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 0,
        username: "admin",
        email: "admin@gmail.com",
        password: "$2b$10$DDDEsD5yeuglT8/v8PhE/OGzcPUYRYfgYgAQDudhwNlEi8YlyZF1O",
        signupdate: "2019-05-20"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
