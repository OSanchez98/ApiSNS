const UsuarioRoutes = require('./UsuarioRoutes');
const TamañoRoute = require('./TamañoRoute');
const ProductosRoutes = require('./ProductosRoutes');
const CategoriasRoutes = require('./CategoriaRoutes');
const AdministradorRoutes = require('./AdministradorRoutes');

module.exports = function(app)
{
    UsuarioRoutes(app);
    TamañoRoute(app);
    ProductosRoutes(app);
    CategoriasRoutes(app);
    AdministradorRoutes(app);
}