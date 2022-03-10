require("dotenv").config();
const userSchema = require("./auxiliary_files/userSchema");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const { CustomError } = require("./auxiliary_files/customErrorClass");

const login = async (req, res) => {
    const { username, password } = req.body;

    const usernameDB = await userSchema.find({ username: username });

    if (!username || !password) {
        res.status(201).send("Please provide the missing element");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ usernameDB }, secret, {
        expiresIn: "30d",
    });
    console.log(req.headers);
    //TEST
    res.status(200).json({
        message: `Inputs :${username}, ${password} logged and signed`,
        token: `${token} `,
    });
};

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;

    console.log(req.headers);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "No token provided" });
    }
    res.status(200).json({ msg: req.headers });
};

module.exports = { login, dashboard };
