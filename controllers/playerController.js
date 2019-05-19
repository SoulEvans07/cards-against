const { Player } = require('../models');

exports.list = async (req, res) => {
  try {
    let list = await Player.findAll({ include: [{ all: true }] });

    return res.status(200).send(list);
  } catch (e) {
    console.error('[ERROR] Player.list()\n    ', e.message);
    return res.status(500).send(e.message)
  }
};
