const Sequelize = require('sequelize');
const db = require('../config/db');

const Deck = db.define('Deck', {
  name: Sequelize.STRING,
});

Deck.associate = function (models) {
  Deck.hasOne(models.User, { as: 'creator', foreignKey: 'creatorId' });
  Deck.hasMany(models.WhiteCards, { as: 'whiteDeck', through: 'DeckWhiteCards', foreignKey: 'deckId' });
  Deck.hasMany(models.BlackCards, { as: 'blackDeck', through: 'DeckBlackCards', foreignKey: 'deckId' });
};

module.exports = Deck;
