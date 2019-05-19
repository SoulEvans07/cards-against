module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    ready: DataTypes.BOOLEAN,
    points: DataTypes.INTEGER
  });

  Player.associate = function (models) {
    models.Player.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    models.Player.belongsTo(models.Room, {
      as: 'room',
      foreignKey: 'roomId'
    });
    models.Player.belongsToMany(models.WhiteCard, {
      as: 'hand',
      through: 'PlayerHand',
      foreignKey: 'playerId'
    })
  };

  return Player;
};
