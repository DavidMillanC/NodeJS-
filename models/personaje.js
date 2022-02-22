const mongoose = require("mongoose");
const schema = mongoose.Schema;

const personajeSchema = schema({
  nombre: String,
  bio: String,
  img: String,
  aparicion: String,
  casa: String,
});

module.exports = mongoose.model("personajes", personajeSchema, "personajes");
