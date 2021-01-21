const jwt = require("jsonwebtoken");
/* 
  Este arquivo é um middleware ou seja uma função que ocorre antes de executar o
  controller, ultilizamos o next para passar para a proxima função ao encerramento
  das validações.
  Neste modulo, iremos realizar a validação do JWT, assim permitindo que quando
  for necessário localizar o Id do usuario no banco de dados, ocorra esta validação. 
*/
module.exports = {
  verifyJWT(req, res, next) {
    // Coletando a header da requisição
    const token = req.headers["x-access-token"];
    // Validando a existência do token
    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: "No token provided." });

    // Realizando a verificação
    jwt.verify(token, process.env.SECRET_PASS, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: "Failed to authenticate token." });

      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  },
};
