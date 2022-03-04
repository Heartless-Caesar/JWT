const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log("Provide missing input");
  }
  //PARAMS AND JWT SECRET STRING
  const token = jwt.sign({username,password},process.env.JWT.SECRET)
};



module.exports = { login };
