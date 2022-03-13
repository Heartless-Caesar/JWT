require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const { CustomError } = require("./auxiliary_files/customErrorClass");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomError("No auth header");
    }

    const token = authHeader.split(" ")[1];

    try {
        //VERIFICATION OF USER'S TOKEN
        const decoded = jwt.verify(token, secret);

        console.log(decoded);

        //const { id, username } = decoded;

        //req.user = { id, username };
    } catch (error) {
        console.log(req.headers);
        throw new CustomError("Error");
    }
    next();
};

module.exports = authMiddleware;
