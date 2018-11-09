const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({

    Code: String,
    Titulo: String,
    Descripcion: String,
    Precio: String,
    file:
    {
        nombre: String,
        titulo: String,
        src: String
    },
    Categoria:
    {
        _id:{
            type: Schema.ObjectId,
            ref:'categorias'
          },
          Descripcion:String,
    }

})
module.exports = mongoose.model('Productos',ProductoSchema);