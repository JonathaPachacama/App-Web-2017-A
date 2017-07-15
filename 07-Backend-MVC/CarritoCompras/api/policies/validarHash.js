
var Passwords = require('machinepack-passwords');
module.exports = function(req, res, next) {
  console.log("Antes de levantar");
  Usuario.findOne({
      correo:"pool@epn.edu.ec"
    })
    .exec(function (err,usuarioEncontrado) {
    if(err) return res.serverError("error");
    if(!usuarioEncontrado){
      return res.serverError("El usuario no existe");
    }else{
      if(usuarioEncontrado.password=="12345"){
        console.log("No aplicado el hash")
        Passwords.encryptPassword({
          password: usuarioEncontrado.password,
        }).exec({
          error: function (err) {
            return res.serverError(err,"Error de epcriptacion");
          },
          success: function (passwordPaul) {
            Usuario.update(
              {
                id:usuarioEncontrado.id
              },
              {password:passwordPaul
              }
            )
              .exec(function (err,PaulActualizado) {
                if(err) return res.serverError(err);
                if(!PaulActualizado){
                  return res.serverError("Paul no existe")
                }else{
                  console.log("Sails levantado");


                }

              })


          },
        });

      }else{
        console.log("Aplicar el hash")
      }
    }
  });


};

