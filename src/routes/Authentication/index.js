const express = require("express");
const createCookieToken = require("../../api/authentication/controllers/createAuthCookie");
const router = express.Router();

router.post('/jwt', createCookieToken)

module.exports = router;
