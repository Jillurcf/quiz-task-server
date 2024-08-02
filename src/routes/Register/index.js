const register = require('../../api/Register/Controller/register.js');

const router = require('express').Router();
router.post('/register', register);

module.exports = router;



