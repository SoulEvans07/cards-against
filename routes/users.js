const router = require('express').Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.get('/list',
  authController.authenticate,
  userController.list
);

module.exports = router;
