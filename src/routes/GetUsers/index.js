
const getUsers = require('../../api/GetUsers/Controllers/getusers');
const router = require('express').Router();
router.get('./Users', getUsers)

module.exports = router;