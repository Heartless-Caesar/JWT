const errorHandler = require("./auxiliary_files/errorHandler");
const express = require("express");
const app = express();
const port = 5000;
const router = require("./routes");
const connect = require("./connect");

app.use(express.json());

app.use("/app", router);

const start = async () => {
    try {
        await connect;
        app.listen(port, () => {
            console.log(`Port ${port} is listening...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
