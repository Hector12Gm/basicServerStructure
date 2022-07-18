const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usauriosPath = "/api/usuarios";
    //Middlewre, funciones para mi webserver,siempre se ejectutan
    //Solo permite la conexion entre pocas conexion
    //Cros orginal access error posible sin CORS

    this.conectarDB();
    //Conectar a la base de datos

    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }
  middlewares() {
    //Cors
    this.app.use(cors());
    //Parseo y lectura  del body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    //Directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usauriosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = server;
