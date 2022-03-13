require("dotenv").config();
const userSchema = require("./auxiliary_files/userSchema");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { userName, password } = req.body;

    const usernameDB = await userSchema.findOne({ username: userName });

    if (!userName || !password) {
        return res.status(201).send("Please provide the missing element");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ usernameDB }, secret, {
        expiresIn: "30d",
    });

    //TEST LOG
    //console.log(req.headers);

    //TEST
    res.status(200).json({
        message: `Inputs :${userName}, ${password} logged and signed`,
        token: `${token} `,
    });
};

const dashboard = async (req, res) => {
    console.log(req.user);
    const { username } = req.user;
    return res
        .status(200)
        .json({ message: `Successful response. Hello ${username}` });
};

module.exports = { login, dashboard };
