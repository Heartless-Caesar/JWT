const { errorHandler } = require("./auxiliary_files/errorHandler");
const express = require("express");
const app = express();

app.use(errorHandler);