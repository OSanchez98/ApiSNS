const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    Code : String,
    Descripcion : String
})

module.exports = mongoose.model('categorias',CategoriaSchema);