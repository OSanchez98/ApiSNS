const mongoose = require('mongoose');
const Administrador = require('../Models/Administrador');

exports.admin_lista = (req,res)=>{
    Administrador.find({},(err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Admin list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Administradores success`,
        Data: {
            Administrador: response
          }
        }))
    })
}