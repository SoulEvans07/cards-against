const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/list', userController.list);

module.exports = router;
