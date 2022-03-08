const userSchema = require("./auxiliary_files/userSchema");
const users = require("./auxiliary_files/users");
const connect = require("./connect");

const populate = async () => {
    try {
        await connect;
        await userSchema.create(users);
        console.log("Data created");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

populate();
