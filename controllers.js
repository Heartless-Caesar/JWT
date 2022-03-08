const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(201).send("Please provide the missing element");
        console.log("Provide missing input");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ id, username }, secret, {
        expiresIn: "30d",
    });
    res.status(200).json({
        message: `Inputs :${username}, ${password}`,
        token: `${token}`,
    });
};

module.exports = { login };
