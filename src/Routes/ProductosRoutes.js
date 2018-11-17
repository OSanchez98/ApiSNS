const ProductosController = require('../Controllers/ProductosController');

module.exports = function(app)
{
    app.post('/api/productos/lista',ProductosController.productosLista);
    app.post('/api/productos/create',ProductosController.productosCreate);
    app.post('/api/productos/update/:id',ProductosController.productosUpdate);
}