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
    }
};
