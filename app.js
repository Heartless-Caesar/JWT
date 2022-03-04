const { errorHandler } = require("./auxiliary_files/errorHandler");
const express = require("express");
const app = express();
const port = 5000;

app.use(errorHandler);

app.use(express.json());

app.use("/app", router);

app.listen(port, () => {
    console.log(`Port ${port} is listening...`);
});
