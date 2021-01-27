const express = require("express");
const mongoose = require("mongoose");

require("dotenv-safe").config();

const routes = require("./routes");
const app = express();

app.use(express.json({ limit: "10Mb" }));

app.use(routes);

// Conexão ao banco
mongoose.connect(process.env.CONNECTION_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(process.env.PORT || 3333);
