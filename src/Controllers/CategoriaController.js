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
exports.categoriasUpdate = (function(req,res,next){
    let updateCategoria={}

    updateCategoria ={
        Code:req.body.Code,
        Descripcion: req.body.Descripcion
    }
    Categoria.findByIdAndUpdate(req.params.id, updateCategoria,{new:true},function(err,res){
        if(err)
        {
            console.log('aqui'+err);
            return res.send(JSON.stringify({success: false,msg:"Failed updating"}));        
        }
        console.log('aqui2'+res);
    })
    res.send(JSON.stringify({code: 200,Message:'Categoria update'}));

})

exports.categoriasDelete = function(req,res){
    Categoria.findByIdAndDelete(req.params.id,function(err,categoriaRes){
        if (err){ 
            return res.send(JSON.stringify({ Code: 400 , Message: `Error Delete categoria list: ${err}`}))
          }
          return res.send(JSON.stringify({code: 200,Message:'Categoria Delete' ,Data:{categoriaRes}}))
        
    })
}