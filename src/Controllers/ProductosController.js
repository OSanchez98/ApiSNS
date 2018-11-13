const mongoose = require('mongoose');
const Productos = require('./../models/Productos');
const Categoria = require('../models/Categorias');


exports.productosLista = (req,res)=>{
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

exports.productosCreate = (req,res)=>{

    let Code = req.body.Code
    let Titulo = req.body.Titulo
    let Descripcion = req.body.Descripcion
    let Precio = req.body.Precio
    let NombreCategoria=req.body.NombreCategoria
   // let file={}

   /* if (req.body.file.image) {
        console.log("entra")
        let type = req.body.file.type
      
        var base64file = req.body.file.image.split(',')[1]
        var buffer = new Buffer(base64file ,'base64');
        var namefile = name+'_'+lastName+'_'+Date.now()+'.'+type
    
        fs.writeFile('./public/img/'+namefile, buffer,function (e) {
          // body...
          if (e) console.error(e)
        })
        file = {
          name: namefile,
          title: name+'_'+lastName,
          src : 'http://localhost:2500'+pathfolder+namefile
        }
      }*/

      let productoInstance = new Productos({
          Code,
          Titulo,
          Descripcion,
          Precio,
      })
      productoInstance.save((err,productoResponse)=>{
          console.log("res: ",productoResponse);
        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Not Created Error: ${err}` }))
            Categoria.findOne({Descripcion:req.body.NombreCategoria},function(err,categoriaResponse){
                console.log("categorias: ",categoriaResponse)
                if (err) return res.send(JSON.stringify({ Code: 400 , Message: `Error contact list: ${err}`}))
                console.log('id: ',categoriaResponse._id)   
                Productos.findOneAndUpdate({_id:productoResponse._id},{
                        $set:
                        {
                            Categoria:
                            {
                                _id:mongoose.Types.ObjectId(categoriaResponse._id),
                                NombreCategoria
                            }
                        }
                    },(err,doc)=>{
                    console.log('update: ',)
                        if (err) return res.send( JSON.stringify({ Code: 500, Message: `Not Update Error: ${err}` }))
                        return res.send( JSON.stringify({
                            Code: 200,
                            Message: `New producto CREATED!! - ID ${categoriaResponse._id}`,
                            Data: {
                              Id_Inserted: productoResponse._id,
                            }
                            
                          }))
                    }) 
            })
      })

}