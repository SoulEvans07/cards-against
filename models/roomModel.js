const Sequelize = require('sequelize');
const db = require('../config/db');

const Room = db.define('Room', {
  name: Sequelize.STRING,
  visibility: Sequelize.INTEGER,

});

Room.associate = function (models) {
  Room.hasOne(models.User, { as: 'creator', foreignKey: 'creatorId' });
  Room.hasOne(models.Player, { as: 'czar', foreignKey: 'czarId' });
  Room.hasMany(models.Player, { as: 'players', through: 'RoomPlayers', foreignKey: 'roomId'})
};

module.exports = Room;
