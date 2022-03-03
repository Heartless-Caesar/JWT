const { login } = require("./controllers");
const express = require("express");
const router = express.Router();

router.post("/login", login);

module.exports = { router };
