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

exports.adminUpdate = (req,res,next)=>{

    let updateAdmin = {}

    updateAdmin ={
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Correo: req.body.Correo,
        Pass:req.body.Pass
    }

    administrador.findByIdAndUpdate(req.params.id,updateAdmin,{new:true},function(err,res){
        if(err)
        {
            console.log('aqui'+err);
            return res.send(JSON.stringify({success: false,msg:"Failed updating"}));        
        }
        console.log('aqui2'+res);
    });
    res.send(JSON.stringify({code: 200,Message:'Admin update'}));
}

exports.adminDelete = (req,res)=>{
    administrador.findByIdAndDelete(req.params.id,function(err,adminResponse){
        if (err){ 
            return res.send(JSON.stringify({ Code: 400 , Message: `Error Delete Admin list: ${err}`}))
          }
          return res.send(JSON.stringify({code: 200,Message:'Admin Delete' ,Data:{adminResponse}}))
        
    })
}