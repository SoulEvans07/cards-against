'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let records = [];
    for(let i = 0; i < 20; i++){
      records.push({
        deckId: 0,
        blackId: i
      });
    }
    return queryInterface.bulkInsert('DeckBlackCards', records, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DeckBlackCards', null, {});
  }
};
