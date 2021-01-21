const User = require("../models/User");
const Crypto = require("crypto");
const jwt = require("jsonwebtoken");

module.exports = {
  async show(req, res) {
    const { email, password } = req.body;

    // Preparando criptografia
    const crypto = Crypto.createHash("sha1");

    // criptografando a senha para armazenar no banco
    const cryptPass = crypto.update(password).digest("hex");

    // localizando usuario
    let user = await User.findOne({ email, password: cryptPass });

    // validando usuario e senha
    if (!user)
      return res.status(401).json({ error: "Invalid user or password" });

    // Coletando id do usuario
    const id = user._id;

    // Gerando o token para acesso do usuario, expira em 15min
    const token = jwt.sign({ id }, process.env.SECRET_PASS, { expiresIn: 900 });

    // Retornando autenticação e token
    return res.json({ auth: true, token: token });
  },
  async delete(req, res) {
    // Removendo as informações do token
    res.json({ auth: false, token: null });
  },
};
