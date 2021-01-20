const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect(
  "mongodb+srv://externalUser:DGXyPW43xtAYp0JY@mrpage.c6xur.mongodb.net/mrpage?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3333);
