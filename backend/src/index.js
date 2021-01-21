const express = require("express");
const mongoose = require("mongoose");

require("dotenv-safe").config();

const routes = require("./routes");
const app = express();

app.use(express.json({ limit: "10Mb" }));

app.use(routes);

// Conexão ao banco
mongoose.connect(
  "mongodb+srv://externalUser:DGXyPW43xtAYp0JY@mrpage.c6xur.mongodb.net/mrpage?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.listen(3333);
