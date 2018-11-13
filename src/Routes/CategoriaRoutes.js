const CategoriasController = require('../Controllers/CategoriaController');

module.exports = function(app)
{
    app.post('/api/categorias/lista',CategoriasController.categoriasLista);
    app.post('/api/categorias/create',CategoriasController.categoriasCreate);
}