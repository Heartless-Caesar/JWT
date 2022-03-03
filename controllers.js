const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log("Provide missing input");
  }
};

module.exports = { login };
