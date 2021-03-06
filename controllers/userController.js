const { User } = require('../models');

exports.list = async (req, res) => {
  try {
    let list = await User.findAll({ include: [{ all: true }] });

    list.forEach(user => {
      user.password = undefined;
    });

    return res.status(200).send(list);
  } catch (e) {
    console.error('[ERROR] User.list()\n    ', e.message);
    return res.status(500).send(e.message)
  }
};
