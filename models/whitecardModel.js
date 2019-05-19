module.exports = (sequelize, DataTypes) => {
  const WhiteCard = sequelize.define('WhiteCard', {
    text: DataTypes.STRING,
  });

  WhiteCard.associate = function (models) {
    models.WhiteCard.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'creatorId'
    });
    models.WhiteCard.belongsToMany(models.Deck, {
      as: 'deck',
      through: 'DeckWhiteCards',
      foreignKey: 'whiteId'
    });
  };

  return WhiteCard;
};
