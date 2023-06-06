const express = require('express');
const authenticateUser = require('../../../middlewares/auth');
const authController = require('../../../api/v1/auth/controller');

const router = express.Router();

router.post('/regist', authController.regist);
router.post('/login', authController.login);

module.exports = router;