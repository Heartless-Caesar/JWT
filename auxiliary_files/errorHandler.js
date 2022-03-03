const CustomError = require("./customErrorClass");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ message: err.message });
  }
};

module.exports = { errorHandler };
