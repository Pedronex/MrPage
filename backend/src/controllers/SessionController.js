const User = require("../models/User");
const Crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const { email, password } = req.body;

    const crypto = Crypto.createHash("sha1");
    const cryptPass = crypto.update(password).digest("hex");

    let user = await User.findOne({ email, password: cryptPass });

    if (!user)
      return res.status(401).json({ error: "Invalid user or password" });
    else return res.status(202).json(user._id);
  },
};
