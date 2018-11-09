const AdministradorController = require('../Controllers/AdministradorCotroller');

module.exports = function(app)
{
    app.post('/api/administrador/lista',AdministradorController.admin_lista);
}