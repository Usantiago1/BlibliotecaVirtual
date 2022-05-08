const mysql = require('mysql');

class ConexionDb {

    crearConexion() {
        const conexion = mysql.createConnection({
            host: 'localhost',
            database: 'bibliotecaVirtual',
            user: 'root',
            password: 'root'
        })

        conexion.connect((error) => {
            if (error) {
                throw error;
            } else {
                console.log('Conexion exitosa');
            }
        });
        conexion.end();
    }

}

const conexiondb = new ConexionDb();
console.log(conexiondb.crearConexion());