module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var usuarioModelo = {
            nombres: "Jonathan",
            apellidos: "Pachacama",
            id: "1",
        };
        return res.view('homepage', {
            usuario: usuarioModelo
        });
    }
};
