const { login, dashboard } = require("./controllers");
const express = require("express");
const auth = require("./auth");
const router = express.Router();

router.post("/login", login);

router.get("/dashboard", auth, dashboard);

module.exports = router;
