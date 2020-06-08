const express = require('express');
const router = express.Router();
const controller = require('./controller');
const User = require('../models/User');

// GET
router.get('/', controller.sendWelcomePage);
router.get('/register', controller.sendRegistrationPage);
router.get('/login', controller.sendloginPage);
router.get('/login', controller.logOut);

// POST
router.post('/register', controller.postToRegister);
router.post('/login', controller.postToLogin);

module.exports = router;