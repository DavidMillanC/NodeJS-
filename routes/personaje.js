var express = require("express");
var PersonajeController = require("../controllers/personaje");

var api = express.Router();

api.get("/getPersonaje", PersonajeController.getPersonajes);
api.post("/personaje", PersonajeController.savePersonaje);
api.put("/editPersonaje/:id", PersonajeController.updatePersonaje);
api.delete("/personaje/:id", PersonajeController.deletePersonaje);
api.get("/getFilterPersonaje", PersonajeController.filtrarPersonaje);

module.exports = api;
