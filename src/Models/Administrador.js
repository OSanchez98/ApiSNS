const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    Nombre : String,
    Apellidos : String,
    Correo : String,
    Pass: String
})

module.exports = mongoose.model('Administrador',AdminSchema);