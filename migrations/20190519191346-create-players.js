'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Players', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ready: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Players');
  }
};
