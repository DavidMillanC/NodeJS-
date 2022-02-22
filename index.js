var mongoose = require("mongoose");
var app = require("./app");
var port = 3800;

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/db-comics", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conexión exitosa!");

    app.listen(port, () => {
      console.log("Serivor corriendo en localhost:3800");
    });
  })
  .catch((err) => console.log(err));
