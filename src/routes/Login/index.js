
const login = require('../../api/Login/Controllers/login');
const router = require("express").Router();
router.post('/login', login)

module.exports = router;




