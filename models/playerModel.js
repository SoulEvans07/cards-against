const Sequelize = require('sequelize');
const db = require('../config/db');

const Player = db.define('Player', {
  ready: Sequelize.BOOLEAN,
  points: Sequelize.INTEGER
});

Player.associate = function (models) {
  Player.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  Player.belongsTo(models.Room, {as: 'room', through: 'RoomPlayers', foreignKey: 'playerId'});
  Player.hasMany(models.WhiteCard, {as: 'hand', through: 'PlayerHand', foreignKey: 'playerId'})
};

module.exports = Player;
