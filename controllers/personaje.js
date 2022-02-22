const { restart } = require("nodemon");
const Personaje = require("../models/personaje");

function getPersonajes(req, res) {
  Personaje.find((err, personajeList) => {
    if (err) {
      res.status(500).send({
        message: "Error Personaje!!",
      });
    } else {
      if (personajeList) {
        res.status(200).json({
          Personaje: personajeList,
        });
      }
    }
  });
}

/*function getPersonaje(req,res){
    var nombrePersonaje = req.params.nombre;

    Personaje.find()
}*/

function savePersonaje(req, res) {
  var personaje = new Personaje();
  var params = req.body;
  if (params.nombre) {
    personaje.nombre = params.nombre;
    personaje.bio = params.bio;
    personaje.img = params.img;
    personaje.aparicion = params.aparicion;
    personaje.casa = params.casa;

    personaje.save((err, personajeStored) => {
      if (err) {
        res.status(500).send({
          mensaje: "Error del servidor",
        });
      } else {
        if (personajeStored) {
          res.status(200).send({
            personaje: personajeStored,
          });
        } else {
          res.status(200).send({
            mensaje: "No se pudo guardar personaje",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      mensaje: "Nombre Obligatorio",
    });
  }
}

function updatePersonaje(req, res) {
  var idPersonaje = req.params.id;
  const update = req.body;
  Personaje.findByIdAndUpdate(
    idPersonaje,
    update,
    { new: true },
    (err, personajeUpdated) => {
      if (err) {
        res.status(500).send({
          message: "Error del servidor",
        });
      } else {
        if (personajeUpdated) {
          res.status(200).send({
            personaje: personajeUpdated,
          });
        } else {
          res.status(404).send({
            message: "No existe el personaje...!",
          });
        }
      }
    }
  );
}

function deletePersonaje(req, res) {
  const idPersonaje = req.params.id;

  console.log(idPersonaje);
  Personaje.findByIdAndRemove(idPersonaje, (err, personajeRemoved) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (personajeRemoved) {
        res.status(200).send({
          personaje: personajeRemoved,
        });
      } else {
        res.status(404).send({
          message: "No existe el personaje ...!",
        });
      }
    }
  });
}

function filtrarPersonaje(req, res) {
  let nom = req.body.nombre;

  Personaje.find(
    { nombre: { $regex: new RegExp(nom, "i") } },
    (err, personaje) => {
      if (err) {
        res.status(500).send({
          message: "Error!, Problemas con el servidor",
        });
      } else {
        if (personaje) {
          res.status(200).json({
            personaje: personaje,
          });
        }
      }
    }
  );
}

module.exports = {
  getPersonajes,
  savePersonaje,
  updatePersonaje,
  deletePersonaje,
  filtrarPersonaje,
};
