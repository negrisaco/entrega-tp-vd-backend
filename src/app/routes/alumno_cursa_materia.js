const dbConection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConection();

    app.get('/alumno_cursa_materia', (req, res) => {
        connection.query('SELECT * FROM alumno_cursa_materia', (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result)
        });
    });

    app.get('/alumno_cursa_materia/:id', (req, res) => {
        console.log('id', req.params.id)
        connection.query('SELECT * FROM alumno_cursa_materia WHERE legajo_a = ?', [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

        app.get('/alumno-materia/:id', (req, res) => {
        const sql = `SELECT alumno_cursa_materia.codigo_materia_a AS codigo_materia, materia.nombre AS nombre_materia 
        FROM alumno_cursa_materia INNER JOIN materia ON (alumno_cursa_materia.codigo_materia_a = materia.codigo_materia) 
        WHERE alumno_cursa_materia.legajo_a = ?`;
        connection.query(sql, [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.post('/alumno_cursa_materia', (req, res) => {
        console.log(req.body)
        const {legajo_a, codigo_materia_a} = req.body;
        connection.query('INSERT INTO alumno_cursa_materia SET?', {
            legajo_a,
            codigo_materia_a
        }, (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })
    
    app.put('/alumno_cursa_materia/:id', (req, res) => {
        console.log(req.body)
        const sql = "UPDATE alumno_cursa_materia SET legajo_a =?, codigo_materia_a =? WHERE id = ?";
        const {legajo_a, codigo_materia_a} = req.body;
        connection.query(sql, [legajo_a, codigo_materia_a, req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })

    app.delete('/alumno_cursa_materia/:id1/:id2', (req, res) => {
        connection.query('DELETE FROM alumno_cursa_materia WHERE legajo_a = ? AND codigo_materia_a = ?', [req.params.id1, req.params.id2], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send({response: `Materia Desvinculada de Alumno`});
        });
    })
}