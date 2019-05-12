const entities = require('html-entities').AllHtmlEntities;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require('../models/userModel');

const signToken = user => jwt.sign(
  { user },
  process.env.SECRET,
  { expiresIn: '7d' },
);

exports.login = async (req, res) => {
  const user = await User.findOne({where:{ username: entities.encode(req.body.username) }});

  if (!user)
    return res.status(404).send('User not found');

  const match = await bcrypt.compare(req.body.password, user.password);

  if (match) {
    const token = signToken(_.pick(user, [ '_id', 'email', 'username', 'is_admin' ]));
    user.password = undefined;
    return res.status(200).send({ user, token });
  }

  return res.status(403).send('Bad credentials!');
};

exports.register = async (req, res) => {
  try {
    if ((typeof req.body === 'undefined') || (typeof req.body.username === 'undefined') ||
      (typeof req.body.password === 'undefined') || (typeof req.body.email === 'undefined')){
      return res.status(500).send('Missing arguments!');
    }

    if (req.body.username.length < 3) {
      console.error('The username should be at least 3 characters!');
      return res.status(500).send('The username should be at least 3 characters!');
    }

    let user = await User.create({
      username: entities.encode(req.body.username),
      password: req.body.password,
      email: entities.encode(req.body.email),
    });

    user.password = undefined;

    return res.status(200).send(user);
  } catch (e) {
    console.error('Error creating user', e);
    return res.status(500).send(e.message);
  }
};
