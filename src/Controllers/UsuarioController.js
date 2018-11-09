const mongoose = require('mongoose');
const Usuarios = require('../Models/Usuarios');

exports.usuarios_lista = (req,res)=>{
    Usuarios.find({},(err,response)=>{
        console.log('res: ',response)
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Usuarios list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Usuarios success`,
        Data: {
            Usuario: response
          }
        }))
    })
}