const UsuarioController = require('./../Controllers/UsuarioController');

module.exports = function(app)
{
    app.post('/api/usuarios/lista',UsuarioController.usuariosLista);
    app.post('/api/usuarios/create',UsuarioController.usuariosCreate);
    app.post('/api/usuarios/update/:id',UsuarioController.usuariosUpdate);
    app.post('/api/usuarios/delete/:id',UsuarioController.usuariosDelete);
}