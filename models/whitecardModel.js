const Sequelize = require('sequelize');
const db = require('../config/db');

const WhiteCard = db.define('WhiteCard', {
  text: Sequelize.STRING,
});

WhiteCard.associate = function (models) {
  WhiteCard.hasOne(models.User, { as: 'creator', foreignKey: 'creatorId' });
  WhiteCard.belongsToMany(models.Deck, {as: 'deck', through: 'DeckWhiteCards', foreignKey: 'whiteId'});
};

module.exports = WhiteCard;
