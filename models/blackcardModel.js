const Sequelize = require('sequelize');
const db = require('../config/db');

const BlackCard = db.define('BlackCard', {
  text: Sequelize.STRING,
  pick: Sequelize.INTEGER
});

BlackCard.associate = function (models) {
  BlackCard.hasOne(models.User, { as: 'creator', foreignKey: 'creatorId' });
  BlackCard.belongsToMany(models.Deck, {as: 'deck', through: 'DeckBlackCards', foreignKey: 'blackId'});
};

module.exports = BlackCard;
