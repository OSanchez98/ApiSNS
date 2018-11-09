const UsuarioController = require('../Controllers/UsuarioController');

module.exports = function(app)
{
    app.post('/api/usuarios/lista',UsuarioController.usuarios_lista);
}