const CategoriasController = require('../Controllers/CategoriaController');

module.exports = function(app)
{
    app.post('/api/Categorias/lista',CategoriasController.categorias_lista);
}