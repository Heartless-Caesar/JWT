require("dotenv").config();
const userSchema = require("./auxiliary_files/userSchema");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;

    const usernameDB = await userSchema.find({ username: username });

    if (!username || !password) {
        res.status(201).send("Please provide the missing element");
        console.log("Provide missing input");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ usernameDB }, secret, {
        expiresIn: "30d",
    });

    res.status(200).json({
        message: `Inputs :${username}, ${password} logged and signed`,
        token: `${token} `,
    });
};

module.exports = { login };
