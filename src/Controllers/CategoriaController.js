const mongoose = require('mongoose');
const Categoria = require('../models/Categorias');

exports.categoriasLista = (req,res)=>{
    Categoria.find({},(err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Categorias list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Categorias success`,
        Data: {
            Categorias: response
          }
        }))
    })
}
exports.categoriasCreate =(req,res,next)=>{
    console.log('consulting Categoria create ... ')

    let Code = req.body.Code
    let Descripcion = req.body.Descripcion

    let CategoriaInstance = new Categoria({
        Code,
        Descripcion
    })

    CategoriaInstance.save((err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Not Created Error: ${err}` }))
        return res.send( JSON.stringify({
            Code: 200,
            Message: `New Categoria CREATED!! - ID ${response._id}`,
            Data: {
              Id_Inserted: response._id,
            }
          }))
    })

}