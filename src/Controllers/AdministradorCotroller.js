const mongoose = require('mongoose');
const administrador = require('../Models/Administrador');

exports.adminlista = (req,res)=>{
    administrador.find({},(err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Admin list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Administradores success`,
        Data: {
            Admin: response
          }
        }))
    })
},

exports.adminCreate=(req,res,next)=>{
    console.log('consulting contact create ... ')

    let Nombre = req.body.Nombre
    let Apellidos = req.body.Apellidos
    let Correo = req.body.Correo
    let Pass = req.body.Pass

    let AdminInstance = new administrador({
        Nombre,
        Apellidos,
        Correo,
        Pass
    })

    AdminInstance.save((err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Not Created Error: ${err}` }))
        return res.send( JSON.stringify({
            Code: 200,
            Message: `New User and Contact CREATED!! - ID ${response._id}`,
            Data: {
              Id_Inserted: response._id,
            }
          }))
    })

}