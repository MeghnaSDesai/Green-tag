
import cors from "cors"; // Me permiten especificar quienes pueden hacer petiicones al API
import express from "express";

//Routes
import userRoutes from "../routes/user.js";

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        //Paths routes
        this.userPath = '/api/user';

        //Middlewares (Funciones adicionales del servidor)
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {
        this.app.use(cors()); // CORS
        this.app.use(express.json()); //Lectura y parseo del body (formato json)
        this.app.use(express.static('public'));// Directorio publico
    }

    routes() {
        this.app.use(this.userPath, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }

}

export default Server;
