// Uso de Librerias
const express = require('express');
const conexion = require('../database/db');
// Para manejo de endpoint con express
const router = express.Router() // R de router esta en MAYUSCULAS

// Rutas o endpoint
router.get('/', (req, res) => {
    res.send('Estoy en la ruta (endpoint) principal');
} )

router.get('/Productos', (req, res) => {
    res.send('Estoy en la ruta de Productos');
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
// OJO quitar funcion
// router.get('/clientes/:id', (req, res) => {
//     res.send('Consultar un solo registro de clientes');
//     console.log(req.params.id);
// } )

router.get('/Productos', (req, res) => {
    conexion.query('SELECT * FROM Productos', (err, result) => {
        if (err) {
            console.log('Error en la consulta de tablas: ', err);
        } else {
            console.log(result);
        }
    })
} )


router.get('/Ventas', (req, res) => {
    conexion.query('SELECT * FROM Ventas', (err, result) => {
        if (err) {
            console.log('Error en la tabla ventas: ', err);
        } else {
            console.log(result);
        }
    })
})

router.get('/Inventario', (req, res) => {
    conexion.query('SELECT * FROM Inventario', (err, result) => {
        if (err) {
            console.log('Error en la tabla Inventario');
        } else {
            console.log(result);
        }
    })
})

router.get('/Garantias', (req,res) => {
    conexion.query('SELECT * FROM Usuarios', (err, result) => {
        if (err) {
            console.log('Error en la talba Garantias');
        } else {
            console.log(result);
        }
    })
})


router.get('/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM Productos WHERE ID_Producto = ?',
    [req.params.id],
    (err, result) => {
        if (err) {
            console.log('Error en la consulta: ', err);
        } else {
            console.log(result);
        }
    })
} )

// Funcion para eliminar en la base de datos
router.delete('/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM Productos WHERE ID_Producto = ?',
    [req.params.id],
    (err, result) => {
        if (err) {
            console.log('Error en la consulta: ', err);
        } else {
            console.log(result);
        }
    })
} )
//////////////////////////// PRUEBA ////////////////////////////

const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Crear una función para insertar datos
router.post('/usuarios', (req, res) => {
    const { Nombre_Usuario, Contraseña, Rol } = req.body;
    
   

    const values = [Nombre_Usuario, Contraseña, Rol];

    conexion.query('INSERT INTO Usuarios (Nombre_Usuario, Contraseña, Rol) VALUES (?, ?, ?)',
    values, (err, result) => {
        if (err) {
            return res.status(500).send('Error al insertar datos');
        }
        res.status(201).send('Usuario insertado con éxito');
    });
});




// Exportamos para que otros archivos puedan usar estas rutas
module.exports = router;

// // jdfjsljflka