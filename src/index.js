const app = require('./config/server');

require('./app/routes/alumno')(app);
require('./app/routes/materia')(app);
require('./app/routes/profesor')(app);
require('./app/routes/alumno_cursa_materia')(app);

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});