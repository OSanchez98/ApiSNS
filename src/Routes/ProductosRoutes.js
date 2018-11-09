const ProductosController = require('../Controllers/ProductosController');

module.exports = function(app)
{
    app.post('/api/productos/lista',ProductosController.productos_lista);
}