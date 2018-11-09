const TamañoController = require('../Controllers/TamañoController');

module.exports = function(app)
{
    app.post('/api/tam/lista',TamañoController.tamaño_lista);
}