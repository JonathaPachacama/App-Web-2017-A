
var Passwords = require('machinepack-passwords');
module.exports = function(req, res, next) {
  console.log("Antes de levantar");
  Usuario.find().exec(function (err,usuarioEncontrado) {
    if(err) return res.serverError("error");
    if(!usuarioEncontrado){
      return res.serverError("El usuario no existe");
    }else{
      if (usuarioEncontrado.password) {
        Passwords.encryptPassword({password: usuarioEncontrado.password}).exec({
          error: function (err) {
            return res.serverError("error en hash Password",err)
          },
          success: function (hashedPassword) {
            usuarioEncontrado.password = hashedPassword;
            console.log('haseado')
            return res.view('perfil')
          },
        });
      }else{
        return res.ok("no hasheado")
      }

    }
  });
  // beforeCreate = function(usuario,cb) {
  //
  //   if (usuario.password) {
  //     Passwords.encryptPassword({password: usuario.password}).exec({
  //       error: function (err) {
  //         cb("error en hash Password",err)
  //       },
  //       success: function (hashedPassword) {
  //         usuario.password = hashedPassword;
  //         cb()
  //       },
  //     });
  //   }else{
  //     cb();
  //   }
  //
  //
  // }

};

