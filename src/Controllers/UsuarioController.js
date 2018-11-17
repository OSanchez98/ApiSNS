const mongoose = require('mongoose');
const Usuarios = require('./../Models/Usuarios');

exports.usuariosLista = (req,res)=>{

    Usuarios.find({},(err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Error Usuarios list: ${err}` }) )
        return res.send( JSON.stringify({
        Code: 200,
        Message: ` Usuarios success`,
        Data: {
            Usuarios: response
          }
        }))
    })
}

exports.usuariosCreate= (req,res,next)=>{
    console.log('consulting Categoria create ... ')

    let Nombre = req.body.Nombre
    let Apellidos = req.body.Apellidos
    let Direccion = req.body.Direccion
    let Sexo = req.body.Sexo
    let Fe_Nacimiento = req.body.fechaNacimiento
    let Correo = req.body.Correo
    let Pass = req.body.Pass

    let usuarioInstace = new Usuarios({
        Nombre,
        Apellidos,
        Direccion,
        Sexo,
        Fe_Nacimiento,
        Correo,
        Pass
    })

    usuarioInstace.save((err,response)=>{
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Not Created Error: ${err}` }))
        return res.send( JSON.stringify({
            Code: 200,
            Message: `New Usuario CREATED!! - ID ${response._id}`,
            Data: {
              Id_Inserted: response._id,
            }
          }))
    })

}

exports.usuariosUpdate = (req,res,next)=>{
    let updateUsuarios = {}

    updateUsuarios ={
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Direccion: req.body.Direccion,
        Sexo:req.body.Sexo,
        Fe_Nacimiento: req.body.fechaNacimiento,
        Correo:req.body.Correo,
        Pass: req.body.Pass
    }

    Usuarios.findByIdAndUpdate(req.params.id, updateUsuarios,{new:true},function(err,res){
        if(err)
        {
            console.log('aqui'+err);
            return res.send(JSON.stringify({success: false,msg:"Failed updating"}));        
        }
        console.log('aqui2'+res);
    })
    res.send(JSON.stringify({code: 200,Message:'User update'}));

}
exports.usuariosDelete= (req,res,next)=>{
    Usuarios.findByIdAndDelete(req.params.id,function(err,userResponse){
        if (err){ 
            return res.send(JSON.stringify({ Code: 400 , Message: `Error Delete Admin list: ${err}`}))
          }
          return res.send(JSON.stringify({code: 200,Message:'User Delete' ,Data:{userResponse}}))
        
    })
}

