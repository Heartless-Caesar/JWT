class CustomError extends Error {
    constructor(message) {
        super(message);
    }
}

const ErrorInstance = (message) => {
    return new CustomError(message);
};

module.exports = { CustomError, ErrorInstance };
