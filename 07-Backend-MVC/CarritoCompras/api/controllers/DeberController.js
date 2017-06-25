//////////////////////////////// Deber
module.exports = {
    Ejemplo: function (req, res) {
        //res.cookie()
        res.cookie('pachacama', 24, { maxAge: 900000, httpOnly: true });
        return res.send('Cookie seteada');

    },
};
