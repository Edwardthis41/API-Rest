// Librerias
const express = require('express');
const router = require('./routes/rutas');
const servidor = express();

// Declaracion de Variables
const server = "localhost";
const port = 3000;

// Utilizar rutas
servidor.use(router);

// Para ejecutar el servidor
servidor.listen(3000, () => console.log(`Server running http://$(server):$(port)`));