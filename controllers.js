require("dotenv").config();
const userSchema = require("./auxiliary_files/userSchema");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { userName, password } = req.body;

    const usernameDB = await userSchema.findOne({ username: userName });

    if (!userName || !password) {
        res.status(201).send("Please provide the missing element");
    }

    //PARAMS, JWT SECRET STRING AND EXPIRATION DATE FOR THE TOKEN
    const token = jwt.sign({ usernameDB }, secret, {
        expiresIn: "30d",
    });

    //TEST LOG
    console.log(req.headers);

    //TEST
    res.status(200).json({
        message: `Inputs :${userName}, ${password} logged and signed`,
        token: `${token} `,
    });
};

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    try {
        //VERIFICATION OF USER'S TOKEN
        const decoded = jwt.verify(token, secret);
        //LOG OF THE OUTPUT OF THE USER
        console.log(decoded);
        res.status(201).json({
            message: `Token verified. Hello ${decoded.usernameDB.username}`,
        });
    } catch (error) {
        console.log(req.headers);
        return res.status(401).json({ msg: "No token provided" });
    }

    res.status(200).json({ msg: req.headers });
};

module.exports = { login, dashboard };
