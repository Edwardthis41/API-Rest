// Librerias
const express = require('express');
const router = require('./routes/rutas');
const servidor = express();

// nueva libreria
const path = require('path');

// Declaracion de Variables
const server = "localhost";
const port = 3000;

// Rutas nuevas
servidor.use(express.static(path.join(__dirname, 'public')));
// Utilizar rutas
servidor.use(router);
servidor.use(express.json()); //OJO añadimos los parentesis

// Para ejecutar el servidor
servidor.listen(3000, () => console.log(`Server running http://$(server):$(port)`));