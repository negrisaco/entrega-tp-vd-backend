const dbConection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConection();

    app.get('/alumno', (req, res) => {
        connection.query('SELECT * FROM alumno', (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result)
        });
    });

    app.get('/alumno/:id', (req, res) => {
        console.log('id', req.params.id)
        connection.query('SELECT * FROM alumno WHERE legajo = ?', [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.post('/alumno', (req, res) => {
        console.log(req.body)
        const {dni, nombre, apellido, ciudad, direccion, telefono, fecha_nacimiento, genero} = req.body;
        connection.query('INSERT INTO alumno SET?', {
            dni, 
            nombre, 
            apellido, 
            ciudad, 
            direccion, 
            telefono, 
            fecha_nacimiento, 
            genero
        }, (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })

    app.put('/alumno/:id', (req, res) => {
        console.log(req.body)
        const sql = "UPDATE alumno SET dni =? , nombre =?, apellido =?, ciudad =?, direccion =?, telefono =?, fecha_nacimiento =?, genero =? WHERE legajo = ?";
        const {dni, nombre, apellido, ciudad, direccion, telefono, fecha_nacimiento, genero} = req.body;
        connection.query(sql, [
            dni, 
            nombre, 
            apellido, 
            ciudad, 
            direccion, 
            telefono, 
            fecha_nacimiento, 
            genero,
            req.params.id
        ], (err, result) => {
            if(err) console.log('Error post ', err);
            res.header ("Access-Control-Allow-Origin", "*");
            res.send(result);
        });
    })

    app.delete('/alumno/:id', (req, res) => {
        connection.query('DELETE FROM alumno WHERE legajo = ?', [req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send({response: `Id: ${req.params.id} Borrado`} );
        });
    })
}