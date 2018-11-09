const mongoose = require('mongoose');
const Categoria = require('../Models/Categorias');

exports.categorias_lista = (req,res)=>{
    Categoria.find({},(err,response)=>{
        console.log("repso:",response)
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