const entities = require('html-entities').AllHtmlEntities;
const { Room, Player } = require('../models');

exports.list = async (req, res) => {
  try {
    let list = await Room.findAll({ include: [{ all: true, nested: true }] });

    return res.status(200).send(list);
  } catch (e) {
    console.error('[ERROR] Room.list()\n    ', e.message);
    return res.status(500).send(e.message)
  }
};

exports.create = async (req, res) => {
  try {
    let room = await Room.create({
      name: entities.encode(req.body.name),   // todo: check if empty
      visibility: req.body.visibility,        // todo: check if over the range
      creatorId: res.currentUser.id
    });

    let player = await Player.create({
      userId: res.currentUser.id,
      roomId: room.id
    });

    room.czarId = player.id;
    room.save();

    return res.status(200).send(room);
  } catch (e) {
    console.error('[ERROR] Room.create()\n    ', e.message);
    return res.status(500).send(e.message)
  }
};
