const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log("Provide missing input");
  }
};
