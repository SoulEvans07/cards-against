'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rooms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      visibility: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: { isIn: [[0, 1]] }
      },
      creatorId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      czarId: {
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rooms');
  }
};
