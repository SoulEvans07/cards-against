const { BlackCard } = require('../models');

exports.list = async (req, res) => {
  try {
    let list = await BlackCard.findAll({});

    return res.status(200).send(list);
  } catch (e) {
    console.error('[ERROR] BlackCard.list()\n    ', e.message);
    return res.status(500).send(e.message)
  }
};
