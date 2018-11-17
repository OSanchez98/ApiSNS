const CategoriasController = require('../Controllers/CategoriaController');

module.exports = function(app)
{
    app.post('/api/categorias/lista',CategoriasController.categoriasLista);
    app.post('/api/categorias/create',CategoriasController.categoriasCreate);
    app.post('/api/categorias/update/:id',CategoriasController.categoriasUpdate);
    app.post('/api/categorias/delete/:id',CategoriasController.categoriasDelete);
}