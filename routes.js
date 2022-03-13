const { login, dashboard } = require("./controllers");
const express = require("express");
const authMiddleware = require("./auth");
const router = express.Router();

router.post("/login", login);

router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
