const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        console.log("Provide missing input");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    res.status(200).json({
        message: `Inputs :${username}, ${password}`,
        token: `${token}`,
    });
};

module.exports = { login };
