const router = require('express').Router();
const authController = require('../controllers/authController');
const playerController = require('../controllers/playerController');

router.get('/list',
  // authController.authenticate,
  playerController.list
);

module.exports = router;
