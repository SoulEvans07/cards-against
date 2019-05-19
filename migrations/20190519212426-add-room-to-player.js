'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Players',
      "roomId", {
        type: Sequelize.INTEGER,
        references: { model: 'Rooms', key: 'id' }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Players', 'roomId');
  }
};
