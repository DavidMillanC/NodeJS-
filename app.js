var express = require("express");
const { model } = require("mongoose");
var app = express();

//cargar rutas

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var personaje_routes = require("./routes/personaje");
//ruta base
app.use("/api", personaje_routes);
//RUTAS
app.get("/", (req, res) => {
  res.status(200).send({
    mensaje: "ruta de prueba de mi api con node",
  });
});

module.exports = app;
