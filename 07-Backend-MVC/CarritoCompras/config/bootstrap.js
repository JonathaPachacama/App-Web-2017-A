/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var Passwords = require('machinepack-passwords');
module.exports.bootstrap = function(cb) {
  console.log("Antes de levantar");

  Usuario
    .findOne({
      correo:"pool@epn.edu.ec"
    })
    .exec(function (err,usuarioEncontrado) {
      if(err) cb("error");
      if(!usuarioEncontrado){
        cb("No existe el usuario");
      }else{
        if(usuarioEncontrado.password=="12345"){
          console.log("No aplicado el hash")
          // cb();
          Passwords.encryptPassword({
            password: usuarioEncontrado.password,
          }).exec({
            error: function (err) {
              cb("Error de epcriptacion");
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
                  if(err) return cb(err);
                  if(!PaulActualizado){
                    cb("Paul no existe")
                  }else{
                    console.log("Sails levantado");
                    cb();
                  }

                })


            },
          });

        }else{
          console.log("Aplicar el hash")
          cb();
        }
      }
    });
};


// var Passwords = require('machinepack-passwords');
// module.exports.bootstrap = function(cb) {
//
//     console.log("Antes de levantar");
//
//     Usuario
//       .findOne({
//         correo:"pool@epn.edu.ec"
//       })
//       .exec(function (err,usuarioEncontrado) {
//         if(err) cb("error");
//         if(!usuarioEncontrado){
//           cb("No existe el usuario");
//         }else{
//           if(usuarioEncontrado.password=="12345"){
//             console.log("No aplicado el hash")
//             // cb();
//             Passwords.encryptPassword({
//               password: usuarioEncontrado.password,
//             }).exec({
//               error: function (err) {
//                 cb("Error de epcriptacion");
//               },
//               success: function (passwordPaul) {
//                 Usuario.update(
//                   {
//                     id:usuarioEncontrado.id
//                   },
//                   {password:passwordPaul
//                   }
//                 )
//                   .exec(function (err,PaulActualizado) {
//                     if(err) return cb(err);
//                     if(!PaulActualizado){
//                       cb("Paul no existe")
//                     }else{
//                       console.log("Sails levantado");
//                       cb();
//                     }
//
//                   })
//
//
//               },
//             });
//
//           }else{
//             console.log("Aplicar el hash")
//             cb();
//           }
//         }
//       });
//
// };
