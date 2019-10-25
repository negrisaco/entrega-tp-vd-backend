const dbConection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConection();

    app.get('/materia', (req, res) => {
        connection.query('SELECT * FROM materia', (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result)
        });
    });

    app.get('/materia/:id', (req, res) => {
        console.log('id', req.params.id)
        connection.query('SELECT * FROM materia WHERE codigo_materia = ?', [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.get('/materia-profesor', (req, res) => {
        const sql = `SELECT materia.codigo_materia AS codigo_materia, materia.nombre AS nombre_materia, materia.legajo_profesor_a AS legajo_profesor, 
        profesor.nombre AS nombre_profesor, profesor.apellido AS apellido_profesor FROM materia INNER JOIN profesor ON (materia.legajo_profesor_a = profesor.legajo_profesor)`;
        connection.query(sql, (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.post('/materia', (req, res) => {
        console.log(req.body)
        const {nombre, legajo_profesor_a} = req.body;
        connection.query('INSERT INTO materia SET?', {
            nombre, 
            legajo_profesor_a
        }, (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })
    
    app.put('/materia/:id', (req, res) => {
        console.log(req.body)
        const sql = "UPDATE materia SET nombre =? , legajo_profesor_a =?  WHERE codigo_materia = ?";
        const {nombre, legajo_profesor_a} = req.body;
        connection.query(sql, [nombre, legajo_profesor_a, req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            console.log('result ', result)
            res.send(result);
        });
    })

    app.delete('/materia/:id', (req, res) => {
        connection.query('DELETE FROM materia WHERE codigo_materia = ?', [req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send({response: `Id: ${req.params.id} Borrado`});
        });
    })
}