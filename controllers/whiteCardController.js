const { WhiteCard } = require('../models');

exports.list = async (req, res) => {
  try {
    let list = await WhiteCard.findAll({});

    return res.status(200).send(list);
  } catch (e) {
    console.error('[ERROR] WhiteCard.list()\n    ', e.message);
    return res.status(500).send(e.message)
  }
};
