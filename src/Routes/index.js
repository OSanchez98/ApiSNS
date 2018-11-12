const administradorRoutes = require('./AdministradorRoutes')
const categoriasRoutes = require('./CategoriaRoutes')
const tamañoRoutes = require('./TamañoRoute')
const usuariosRoutes = require('./UsuarioRoutes')
const productosRoutes = require('./ProductosRoutes')

module.exports = function (app) {
	administradorRoutes(app)
	categoriasRoutes(app)
	tamañoRoutes(app)
	usuariosRoutes(app)
	productosRoutes(app)
}
