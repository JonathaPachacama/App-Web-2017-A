//    localhost:1337/Usuario/metodos
module.exports = {
    eliminarUsuario: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Usuario.destroy({
                id: params.id
            }).exec(function (err, usuarioBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/");
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombres &&
            parametros.apellidos &&
            parametros.correo &&
            parametros.id) {
            Usuario.update({
                id: parametros.id
            }, {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            })
                .exec(function (err, usuarioEditado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEditado) {
                    //si encontro
                    return res.redirect("/");
                }
                else {
                    //no encontrado
                    return res.notFoud();
                }
            });
        }
        else {
            return res.badRequest();
        }
    }
};
