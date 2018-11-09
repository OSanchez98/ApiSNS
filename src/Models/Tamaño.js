const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TamañoSchema = new Schema({
    code: String,
    Descripcion: String,
    Medidas : String
})
module.exports = mongoose.model('Tamaños',TamañoSchema)