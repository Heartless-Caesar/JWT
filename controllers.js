require("dotenv").config();
const userSchema = require("./auxiliary_files/userSchema");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    //LOGIN DATA
    const { userName, password } = req.body;

    //FETCHES USER IN DB
    const usernameDB = await userSchema.findOne({ username: userName });

    //MISSING BODY ERROR
    if (!userName || !password) {
        return res.status(201).send("Please provide the missing element");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ usernameDB }, secret, {
        expiresIn: "30d",
    });

    //SUCCESS RESPONSE
    res.status(200).json({
        message: `Inputs :${userName}, ${password} logged and signed`,
        token: `${token} `,
    });
};

const dashboard = async (req, res) => {
    //DESTRUCTURING FROM REQ.USER HEADER CREATED IN AUTH MIDDLEWARE
    const { username } = req.user;

    //SUCCESSFUL LOGIN FETCHED TOKEN RESPONSE
    return res
        .status(200)
        .json({ message: `Successful response. Hello ${username}` });
};

module.exports = { login, dashboard };
