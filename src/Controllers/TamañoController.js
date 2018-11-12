const mongoose = require('mongoose');
const Tamaño = require('../Models/Tamaño');

exports.tamañoLista = (req,res)=>{
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

exports.tamañoCreate = (req,res)=>{
    console.log('consulting contact create ... ')

    let Code = req.body.Code
    let Descripcion = req.body.Descripcion
    let Medidas = req.body.Medidas

    let TamInstance = new Tamaño({
        Code,
        Descripcion,
        Medidas
    })

    TamInstance.save((err,response)=>{
        if(err) return res.send(JSON.stringify({Code: 500, Message: `Not Created Error: ${err}`}))
        return res.send( JSON.stringify({
            Code: 200,
            Message: `New Tamaño CREATED!! - ID ${response._id}`,
            Data: {
              Id_Inserted: response._id,
            }
          }))

    })
}