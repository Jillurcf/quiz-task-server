const createUsers = require('../../api/Users/Controllers/users');
const router = require('express').Router();
router.post('/users', createUsers);
module.exports = router;