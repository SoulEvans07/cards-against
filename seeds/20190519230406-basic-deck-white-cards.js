'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let records = [];
    for(let i = 0; i < 100; i++){
      records.push({
        deckId: 0,
        whiteId: i
      });
    }
    return queryInterface.bulkInsert('DeckWhiteCards', records, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DeckWhiteCards', null, {});
  }
};
