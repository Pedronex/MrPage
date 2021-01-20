const User = require("../models/User");
const crypt = require("crypto");

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    const sha1 = crypt.createHash("sha1");
    const criptPass = sha1.update(password).digest("hex");
    let user = await User.findOne({ email });

    if (!user) {
      const user = await User.create({
        name,
        email,
        password: criptPass,
      });
      return res.status(201).json(user);
    } else
      return res.status(400).json({ error: "Email is already registered" });
  },
};
