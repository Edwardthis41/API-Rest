// Uso de Librerias
const express = require('express');
const conexion = require('../database/db');
// Para manejo de endpoint con express
const router = express.Router() // R de router esta en MAYUSCULAS

//////////////////////////// PRUEBA ////////////////////////////

const bodyParser = require('body-parser'); // quiza esto no baya a ir

router.use(bodyParser.json()); // estoy esta correcto

// Crear una función para insertar datos
router.post('/usuarioss', (req, res) => {
    const { name, quantity, price } = req.body;
    
    const values = [name, quantity, price];

    conexion.query('INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)',
    values, (err, result) => {
        if (err) {
            return res.status(500).send('Error al insertar datos');
        }
        res.status(201).send('Usuario insertado con éxito');
    });
});
///////////// NEW WORK ///////////////////
// Paguina de presentacion
router.get('/', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome</title>
            </head>
            <body>
                <h1>Welcome to the Inventory Management System</h1>
                <p>Estoy en la ruta (endpoint) principal incluiremos botones de navegacion</p>
                <a href="/inventory.html"><button>Go to Inventory</button></a>
            </body>
            </html>
        `);
    });

// Obtiene el inventario actual de piezas de pollo
router.get('/inventory', (req, res) => {
    conexion.query('SELECT * FROM inventory', (err, result) => {
        if (err) {
            console.log('Error en la consulta de inventario: ', err);
        } else {
            console.log('Estamos en el inventario')
            //console.log(result);
            res.send(result); // aqui es donde se ba enviar la data
        }
    });
} );

// Actualiza el inventario cuando se adquiere una pieza
router.delete('/inventory/:id', (req, res) => {
    conexion.query('DELETE FROM inventory WHERE id = ?',
        [req.params.id],
        (error, resultado) => {
            if (error) {
                console.log('Error en la consulta: ', error)
            } else {
                res.send('Registro borrado')
            }
        }
    )
});

////////// FUNCION PARA INGRESAR DATOS ////////////////
router.post('/inventory', (req, res) => {
    conexion.query('INSERT INTO inventory SET ?',
        [req.body], (error, resultado) => {
            if (error) {
                console.log('Error: ', error)
            } else {
                res.send('Registro ingresado')
            }
        });
    });

//  Obtiene la información contable
router.get('/accounting', (req, res) => {
    conexion.query('SELECT * FROM accounting', (err, account) => {
        if (err) {
            console.log('Error al mirar información contable: ', err);
        } else {
            console.log('Mostrando información contable')
            res.send(account);
        }
    });
} );

// POST para registrar un nuevo usuario
router.post('/users/register', (req, res) => {
    res.send('Estamso en registro de usurios');
} );

// POST para autentificar un usuario
router.post('/users/login', (req, res) => {
    res.send('Estoy en la ruta (endpoint) principal');
} );

// GET para obtener la lista de usuarios (solo accesible por administrador)
router.get('/users', (req, res) => {
    conexion.query('SELECT * FROM users', (err, account) => {
        if (err) {
            console.log('Error al mirar información contable: ', err);
        } else {
            console.log('Mostrando información contable')
            res.send(account);
        }
    });
} );


///////////// END NEW WORK //////////////

// router.get('/Productos', (req, res) => {
//     res.send('Estoy en la ruta de Productos');
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
// Este es que esta funcionando lizardo
router.get('/Garantias', (req,res) => {
    conexion.query('SELECT * FROM users', (err, result) => {
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
            res.send(result); // acabamos de añadir es para que el servidor responda
        }
    });
});

// Funcion para eliminar en la base de datos
router.delete('/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM Productos WHERE ID_Producto = ?',
    [req.params.id],
    (err, result) => {
        if (err) {
            console.log('Error en la consulta: ', err);
        } else {
            console.log(result);
            console.log('Borrado con exito')
        }
    })
} )




// Exportamos para que otros archivos puedan usar estas rutas
module.exports = router;