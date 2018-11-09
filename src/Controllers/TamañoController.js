const mongoose = require('mongoose');
const Tamaño = require('../Models/Tamaño');

exports.tamaño_lista = (req,res)=>{
    Tamaño.find({},(err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Tamaños list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Tamaños success`,
        Data: {
            Tamaño: response
          }
        }))
    })
}