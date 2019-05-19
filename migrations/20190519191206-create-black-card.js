'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlackCards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pick: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      creatorId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BlackCards');
  }
};
