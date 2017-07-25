///<reference path="SaludoController.ts"/>
var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');
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
        var parametros = req.allParams();
        if (!parametros.busqueda) {
            parametros.busqueda = '';
        }
        //let where = {};
        sails.log.info("Parametros", parametros);
        Usuario
            .find()
            .where({ or: [
                {
                    nombres: {
                        contains: parametros.busqueda
                    }
                },
                {
                    apellidos: {
                        contains: parametros.busqueda
                    }
                }
            ]
        })
            .exec(function (err, usuarios) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Usuarios", usuarios);
            return res.view('homepage', {
                usuarios: usuarios
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
            Usuario.findOne({ correo: parametros.correo })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        return res.view('UsuarioGestion/perfil');
                    }
                    else {
                        return res.serverError("Password Incorrecta");
                    }
                    // Passwords.checkPassword({
                    //   passwordAttempt: parametros.password,
                    //   encryptedPassword: usuarioEncontrado.password,
                    // })
                    //   .exec({
                    //     error: function (err) {
                    //       return res.serverError(err);
                    //     },
                    //     incorrect: function () {
                    //       return res.badRequest("Datos Invalidos")
                    //     },
                    //     success: function () {
                    //       return res.view('UsuarioGestion/perfil');
                    //     }
                    //   });
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.serverError("No envia correo y pass");
        }
    },
    crearUsuario: function (req, res) {
        return res.view('crearusuario');
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id
            })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEncontrado) {
                    //Si encontro
                    return res.view('editarusuario');
                }
                else {
                    //no Encontrado
                    return res.redirect('/crearUsuario');
                }
            });
        }
        else {
            return res.redirect('/crearUsuario');
        }
    }
};
