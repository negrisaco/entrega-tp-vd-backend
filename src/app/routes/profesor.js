const dbConection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConection();

    app.get('/profesor', (req, res) => {
        connection.query('SELECT * FROM profesor', (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result)
        });
    });

    app.get('/profesor/:id', (req, res) => {
        console.log('id', req.params.id)
        connection.query('SELECT * FROM profesor WHERE legajo = ?', [req.params.id], (err, result) => {
            console.log('RESULT ', result)
            if (err) {
                console.log('ERROR ', err)
            }
            res.send(result);
        });
    });

    app.post('/profesor', (req, res) => {
        console.log(req.body)
        const {dni, nombre, apellido, ciudad, direccion, telefono, fecha_nacimiento} = req.body;
        connection.query('INSERT INTO profesor SET?', {
            dni, 
            nombre, 
            apellido, 
            ciudad, 
            direccion, 
            telefono, 
            fecha_nacimiento
        }, (err, result) => {
            if(err) res.send(err);
            res.send(result);
        });
    })
    
    app.put('/profesor/:id', (req, res) => {
        console.log(req.body)
        const sql = "UPDATE profesor SET dni =? , nombre =?, apellido =?, ciudad =?, direccion =?, telefono =?, fecha_nacimiento =? WHERE legajo_profesor = ?";
        const {dni, nombre, apellido, ciudad, direccion, telefono, fecha_nacimiento} = req.body;
        connection.query(sql, [
            dni, 
            nombre, 
            apellido, 
            ciudad, 
            direccion, 
            telefono, 
            fecha_nacimiento, 
            req.params.id
        ], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send(result);
        });
    })


    app.delete('/profesor/:id', (req, res) => {
        connection.query('DELETE FROM profesor WHERE legajo_profesor = ?', [req.params.id], (err, result) => {
            if(err) console.log('Error post ', err);
            res.send({response: `Id: ${req.params.id} Borrado`});
        });
    })
}