///<reference path="SaludoController.ts"/>
var Passwords = require('machinepack-passwords');
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        // let usuarioModelo ={
        //   nombres: 'joanathan',
        //   apellidos:"Pachacama",
        //   id:"1",
        // };
        Usuario.find().exec(function (err, usuariosEncontrados) {
            if (err)
                return res.negotiate(err);
            return res.view('homepage', {
                usuarios: usuariosEncontrados
            });
        });
        ////Otra forma
        // homepage: (req,res) => {
        //   sails.models.usuario.find().exec(
        //     (err, usuariosEncontrados) => {
        //       if (err) return res.serverError(err)
        //       return res.view('homepage',{usuarios:usuariosEncontrados})
        //     }
        //   )}
        // return res.view('homepage',{
        //   usuario:usuarioModelo
        // })
    },
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({
                correo: parametros.correo
            }).exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    Passwords.checkPassword({
                        passwordAttempt: parametros.password,
                        encryptedPassword: usuarioEncontrado.password,
                    })
                        .exec({
                        error: function (err) {
                            return res.serverError(err);
                        },
                        incorrect: function () {
                            return res.badRequest("Datos Invalidos");
                        },
                        success: function () {
                            return res.send('logeado');
                        }
                    });
                }
            });
        }
        else {
            return res.serverError('No envia correo y password');
        }
    },
};
