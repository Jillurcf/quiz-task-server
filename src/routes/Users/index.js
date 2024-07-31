const createUsers = require('../../api/Users/Controllers/users');
const router = require('express').Router();
router.post('/Users', createUsers);
module.exports = router;