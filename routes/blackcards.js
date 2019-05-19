const router = require('express').Router();
const authController = require('../controllers/authController');
const blackCardController = require('../controllers/blackCardController');

router.get('/list',
  // authController.authenticate,
  blackCardController.list
);

module.exports = router;
