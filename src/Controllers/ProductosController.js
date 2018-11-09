const mongoose = require('mongoose');
const Productos = require('../Models/Productos');

exports.productos_lista = (req,res)=>{
    Productos.find({},(err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Productos list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Productos success`,
        Data: {
            Productos: response
          }
        }))
    })
}