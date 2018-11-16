const AdministradorController = require('../Controllers/AdministradorCotroller');

module.exports = function(app)
{
    app.post('/api/administrador/lista',AdministradorController.adminlista);
    app.post('/api/administrador/create',AdministradorController.adminCreate);
    app.post('/api/administradores/update/:id',AdministradorController.adminUpdate);
    app.post('/api/administradores/delete/:id',AdministradorController.adminDelete);
    
}