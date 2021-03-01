const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Environments
const { PORT } = require("./config/environments");

// Rutas
const articlesRouter = require("./routes/articles");
const usersRouter = require("./routes/users");
const ventasRouter = require("./routes/ventas");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.use("/api/articles", articlesRouter);
app.use("/api/users", usersRouter);
app.use("/api/ventas", ventasRouter);

const server = app.listen(PORT, function () {
  console.log(`Escuchando en el puerto ${PORT}`);
});
