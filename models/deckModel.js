module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
  });

  Deck.associate = function (models) {
    models.Deck.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'creatorId'
    });
    models.Deck.belongsToMany(models.WhiteCard, {
      as: 'whiteDeck',
      through: 'DeckWhiteCards',
      foreignKey: 'deckId'
    });
    models.Deck.belongsToMany(models.BlackCard, {
      as: 'blackDeck',
      through: 'DeckBlackCards',
      foreignKey: 'deckId'
    });
  };

  return Deck;
};
