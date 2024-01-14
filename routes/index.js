const express = require('express');
const { login, register, getUserDetails } = require('../controllers/users');
const router = express.Router();
const authorization = require('../middleware/Authorization');

router.use('/api', router);

router.post('/login', login);
router.post('/register', register);
router.get('/user', authorization, getUserDetails);

module.exports = router;