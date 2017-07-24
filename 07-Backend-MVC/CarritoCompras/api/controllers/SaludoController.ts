/**
 * Created by visitante on 19/06/2017.
 */
declare var module;
declare var sails;
declare var Usuario;
  //En typescript podemos usar arrow fuction


// /Saludo/crearUsuarioQuemado
module.exports = {
  welcome:(req,res)=>{
    //POST
    //.error
    //.silly
    sails.log.info(req.method);
    if(req.method=="POST"){
      return res.json({saludo:"hola"})
    }else{
      return res.send("Error en metodo")
    }
     //Metodo : GET POST PUT DELETE
    //Si no ponen el metodo devolver
    //Metodo:perteneces al req.method;
    // return res.send("Error en metodo")
  },

  //otra ruta que hace lo mismo pero resumen res y req y evia texto plano
  bienvenido:(req,res)=>{
    //PUT
    sails.log.info(req.method);
    if(req.method=="PUT"){
      return res.json("hola")
    }else{
      return res.send("Error en metodo (ruta bienvenida)")
    }
  },

  crearUsuarioQuemado:(req,res)=>{
    let nuevoUsuario = {
      nombres:'Jonathan',
      apellidos:'Pachacama',
      password:'12345',
      correo:'jonathan.pachacama@epn.edu.ec',
      fechaNacimiento:new Date()
    };

    //nombreModelo.metodo(parametros).exec((err,registro)=>{})
    Usuario.create(nuevoUsuario)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error)
          }else{
            return res.ok(usuarioCreado);
          }
        }
      )


  },

  crearUsuarioQP:(req,res)=>{

    //localhost:1337/Saludo/crearUsuarioQP ==> PATH absoluto
    //  /Saludo/crearUsuarioQP    ==> PATH relativo
    let parametros = req.allParams();
    sails.log.info("Parametros",parametros);
    //  Ejemplo para crear por parametros query
    // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02
    let nuevoUsuario = {
      nombres:parametros.nombres,
      apellidos:parametros.apellidos,
      password:parametros.password,
      correo:parametros.correo,
      fechaNacimiento:parametros.fechaNacimiento
    };
    // 1 - Query Parameters ?nombre=Adrian&apellidos=Eguez

    // 2 - Forms Parameters

    //nombreModelo.metodo(parametros).exec((err,registro)=>{})




    Usuario.create(nuevoUsuario)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error)
          }else{
            // return res.ok(usuarioCreado);
            /*

                             Usuario.find().exec((err,usuarios)=>{
                               if(err) return res.negotiate(err);
                               sails.log.info("Usuarios",usuarios);

                               return res.view('homepage',{
                                 usuarios:usuarios
                               })
                             })
                            */
            return res.redirect("/");
          }
        }
      )


  },
  contar:(req,res)=>{
    Usuario.count({nombres:'Jonathan'}).exec(function countCB(error, found) {
      console.log('Hay' + found + ' Usuario llamado jonathan');

      return res.send("contado exitoso")
    });
  },
  eliminarUsuario:(req,res)=>{
    let parametros = req.allParams();
    Usuario.destroy({id:parametros.id}).exec(function (err){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('Usuario eliminado');
      console.log(parametros);
      return res.redirect("/");
    });
  },
  actualizar:(req,res)=>{

    Usuario.update({nombres:'Jonathan'},{nombres:'Paul'}).exec(function afterwards(err, updated){

      if (err) {

        sails.log('No actualizado');
        return res.negotiate(err);
      }else {
        console.log('Actualizado el nombre de jonathan a paul');
        return res.send('actualizado')
      }


    });

  },
  encontrar:(req,res)=>{
    let parametros = req.allParams();
    Usuario.find({nombres:parametros.nombres}).exec(function (err, UsuarioEncontrado){
      if (err) {
        return res.serverError(err);
      }
      sails.log('Hay %d usuarios de nombre Jonathan.', UsuarioEncontrado.length, UsuarioEncontrado);
      return res.json(UsuarioEncontrado);
    });

  },
  encontrarUno:(req,res)=>{
    let parametros = req.allParams();
    Usuario.findOne({
      nombres:parametros.nombres
    }).exec(function (err, encontrarJonathan){
      if (err) {
        return res.serverError(err);
      }
      if (!encontrarJonathan) {
        return res.notFound('No se pudo encontrar Jonathan, Lo siento.');
      }

      sails.log('Usuario Encontrado');
      return res.json(encontrarJonathan);
    });
  },




};
