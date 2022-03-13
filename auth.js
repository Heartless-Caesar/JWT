const { CustomError } = require("./auxiliary_files/customErrorClass");
const { UnauthorizedError } = require("./auxiliary_files/unauthenticated");
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
    //FETCHED AUTH HEADER
    const authHeader = req.headers.authorization;

    //MISSING AUTH HEADER HANDLER
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("No auth header");
    }

    //GETS THE VALUE BETWEEN SPACES(THE TOKEN ITSELF)
    const token = authHeader.split(" ")[1];

    try {
        //VERIFICATION OF USER'S TOKEN
        const decoded = jwt.verify(token, secret);

        console.log(decoded);

        //DESTRUCTURING THE PROPERTIES OF A USER IN THE DB
        const { _id, username } = decoded.usernameDB;

        //CREATION OF THE USER HEADER
        req.user = { _id, username };

        next();
    } catch (error) {
        console.log(req.headers);
        throw new UnauthorizedError(
            "Something went wrong in the token verification..."
        );
    }
    next();
};

module.exports = authMiddleware;
