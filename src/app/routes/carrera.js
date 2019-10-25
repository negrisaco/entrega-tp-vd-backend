const dbConection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConection();

    app.get('/carrera', (req, res) => {
        connection.query('SELECT * FROM carrera', (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result)
        });
    });

    app.get('/carrera/:id', (req, res) => {
        console.log('id', req.params.id)
        connection.query('SELECT * FROM carrera WHERE codigo_carrera = ?', [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.post('/carrera', (req, res) => {
        console.log(req.body)
        const {nombre} = req.body;
        connection.query('INSERT INTO carrera SET?', { 
            nombre
        }, (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })
    
    app.put('/carrera/:id', (req, res) => {
        console.log(req.body)
        const sql = "UPDATE carrera SET nombre =? WHERE codigo_carrera = ?";
        const {nombre} = req.body;
        connection.query(sql, [nombre, req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })

    app.delete('/carrera/:id', (req, res) => {
        connection.query('DELETE FROM carrera WHERE codigo_carrera = ?', [req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send({response: `Id: ${req.params.id} Borrado`});
        });
    })
}