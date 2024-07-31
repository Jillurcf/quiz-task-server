
const getUsers = require('../../api/GetUsers/Controllers/getusers');
const router = require('express').Router();
router.get('/user', getUsers)

module.exports = router;