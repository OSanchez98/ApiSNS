const AdministradorController = require('../Controllers/AdministradorCotroller');

module.exports = function(app)
{
    app.post('/api/administrador/lista',AdministradorController.adminlista);
    app.post('/api/administrador/create',AdministradorController.adminCreate);
}