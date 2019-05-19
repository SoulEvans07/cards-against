const router = require('express').Router();
const authController = require('../controllers/authController');
const whiteCardController = require('../controllers/whiteCardController');

router.get('/list',
  // authController.authenticate,
  whiteCardController.list
);

module.exports = router;
