module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    visibility: DataTypes.INTEGER
  });

  Room.associate = function (models) {
    models.Room.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'creatorId'
    });
    models.Room.belongsTo(models.Player, {
      as: 'czar',
      foreignKey: 'czarId'
    });
    models.Room.hasMany(models.Player, {
      as: 'players',
      foreignKey: 'roomId'
    });
  };

  return Room;
};
