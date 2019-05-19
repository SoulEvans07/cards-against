module.exports = (sequelize, DataTypes) => {
  const BlackCard = sequelize.define('BlackCard', {
    text: DataTypes.STRING,
    pick: DataTypes.INTEGER
  });

  BlackCard.associate = function (models) {
    models.BlackCard.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'creatorId'
    });
    models.BlackCard.belongsToMany(models.Deck, {
      as: 'deck',
      through: 'DeckBlackCards',
      foreignKey: 'blackId'
    });
  };

  return BlackCard;
};
