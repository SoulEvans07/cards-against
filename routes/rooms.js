const router = require('express').Router();
const authController = require('../controllers/authController');
const roomController = require('../controllers/roomController');

router.get('/list',
  authController.authenticate,
  roomController.list
);

router.post('/new',
  authController.authenticate,
  roomController.create
);

router.post('/:id/join',
  authController.authenticate,
  roomController.join
);

module.exports = router;
