const dbConection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConection();

    app.get('/alumno_pertenece_carrera', (req, res) => {
        connection.query('SELECT * FROM alumno_pertenece_carrera', (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result)
        });
    });

    app.get('/alumno_pertenece_carrera/:id', (req, res) => {
        console.log('id', req.params.id)
        connection.query('SELECT * FROM alumno_pertenece_carrera WHERE id = ?', [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.post('/alumno_pertenece_carrera', (req, res) => {
        console.log(req.body)
        const {legajo_a, codigo_carrera_a} = req.body;
        connection.query('INSERT INTO alumno_pertenece_carrera SET?', {
            legajo_a,
            codigo_carrera_a
        }, (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })
    
    app.put('/alumno_pertenece_carrera/:id', (req, res) => {
        console.log(req.body)
        const sql = "UPDATE alumno_pertenece_carrera SET legajo_a =?, codigo_carrera_a =? WHERE id = ?";
        const {legajo_a, codigo_carrera_a} = req.body;
        connection.query(sql, [legajo_a, codigo_carrera_a, req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })

    app.delete('/alumno_pertenece_carrera/:id', (req, res) => {
        connection.query('DELETE FROM alumno_pertenece_carrera WHERE id = ?', [req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send({response: `Id: ${req.params.id} Borrado`});
        });
    })
}