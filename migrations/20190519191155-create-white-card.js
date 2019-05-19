'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WhiteCards', {
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
      creatorId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WhiteCards');
  }
};
