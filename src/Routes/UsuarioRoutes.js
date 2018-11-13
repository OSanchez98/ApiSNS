const UsuarioController = require('./../Controllers/UsuarioController');

module.exports = function(app)
{
    app.post('/api/usuarios/lista',UsuarioController.usuariosLista);
    app.post('/api/usuarios/create',UsuarioController.usuariosCreate);

}