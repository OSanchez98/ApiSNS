const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TamañoSchema = new Schema({
    Code: String,
    Descripcion: String,
    Medidas : String
})
module.exports = mongoose.model('tamaños',TamañoSchema)