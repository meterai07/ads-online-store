
const express = require('express');
const { getUser, login, register } = require('../controllers/users');
const router = express.Router();
const verifyToken = require('../middleware/VerifyToken');

router.post('/api/login', login);
router.post('/api/register', register);
router.get('/api/user', verifyToken, getUser);

module.exports = router