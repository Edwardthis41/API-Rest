// Uso de Librerias
const express = require('express');

// Para manejo de endpoint con express
const router = express.Router() // R de router esta en MAYUSCULAS

// Rutas o endpoint
router.get('/', (req, res) => {
    res.send('Estoy en la ruta (endpoint) principal')
} )

router.get('/Productos', (req, res) => {
    res.send('Estoy en la ruta de Productos');
} )

router.get('/Clientes', (req, res) => {
    res.send('Estoy en la ruta de Clientes');
} )

router.get('/Comestibles/carnes', (req, res) => {
    res.send('Estoy en la ruta de comestibles y en carnes');
} )

router.get('/categorias', (req, res) => {
    res.send('Estoy en la ruta de categorias');
} )


router.get('/categorias/electrodomesticos', (req, res) => {
    res.send('Estoy en la ruta de categorias en ELECTRODOMESTICOS');
} )

router.get('/categorias/portatiles', (req, res) => {
    res.send('Estoy en la ruta de categorias en PORTATILES');
} )


router.get('/categorias/celulares', (req, res) => {
    res.send('Estoy en la ruta de categorias en CELULARES');
} )

router.get('/categorias/visuteria', (req, res) => {
    res.send('Estoy en la ruta de categorias en VISUTERIA');
} )


router.get('/categorias/vajilla', (req, res) => {
    res.send('Estoy en la ruta de categorias en VAJILLA');
} )


// Exportamos para que otros archivos puedan usar estas rutas
module.exports = router;