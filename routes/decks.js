const router = require('express').Router();
const authController = require('../controllers/authController');
const deckController = require('../controllers/deckController');

router.get('/list',
  // authController.authenticate,
  deckController.list
);

module.exports = router;
