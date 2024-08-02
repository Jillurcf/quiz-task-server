const register = require('../../api/Register/Controller/register.js');
const verifyToken = require('../../middleware/verifyToken')
const router = require('express').Router();
router.post('/register', register);
console.log("5  ",verifyToken)
module.exports = router;



