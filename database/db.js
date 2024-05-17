// Requerimos la libreria mysql2
const mysql2 = require('mysql2');

// Crear una conexión a la base de datos
const conexion = mysql2.createConnection({
    host: 'localhost',
    database: 'autopartswerehouse', // añde el nombre de tu database
    user: 'root',
    password: ''
});

// Realizamos la conexion a al DATABASE
conexion.connect( (err, conn) => {
    if(err) {
        console.log('error en la conexion', err);
    } else {
        console.log('conexion exitosa Lizardo')
    }

});

// Exportar la conexion para otros archivos usen
module.exports = conexion;