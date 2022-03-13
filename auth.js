require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(404)
            .json({ errorMessage: "No authorization header" });
    }

    const token = authHeader.split(" ")[1];

    try {
        //VERIFICATION OF USER'S TOKEN
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        //LOG OF THE OUTPUT OF THE USER
        //const { id, username } = decoded;
        //req.user = { id, username };
        next();
        /*return res.status(201).json({
            message: `Token verified. Hello ${decoded.usernameDB.username}`,
        });*/
    } catch (error) {
        console.log(req.headers);
        return res.status(401).json({ msg: "No token provided" });
    }
    next();
};

module.exports = authMiddleware;
