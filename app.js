const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Environments
const { PORT } = require("./config/environments");

const app = express();
const appAPI = require("./routes/app");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
appAPI(app, "articulos");
appAPI(app, "posts");
appAPI(app, "users");
appAPI(app, "ventas");

const server = app.listen(PORT, function () {
  console.log(`Escuchando en el puerto ${PORT}`);
});
