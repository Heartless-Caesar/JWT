const { login, dashboard } = require("./controllers");
const express = require("express");
const authMiddleware = require("./auth");
const router = express.Router();

router.route("/login").post(login);

router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;
