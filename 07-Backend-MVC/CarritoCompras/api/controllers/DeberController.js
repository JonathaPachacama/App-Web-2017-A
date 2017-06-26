//////////////////////////////// Deber
module.exports = {
    Ejemplo: function (req, res) {
        //res.cookie()
        res.cookie('pachacama', 24, { maxAge: 900000, httpOnly: true }); //con limite de tiempo
        res.cookie('cart', { items: [1, 2, 3] }, { maxAge: 900000 }); //pasando un objeto
        res.cookie('nombre', 'pool', { signed: true }); //firmada
        res.cookie('name', 'tobi', {
            domain: '.example.com',
            path: '/',
            secure: true
        });
        res.cookie('rememberme', '1', {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        });
        return res.send('Cookie seteada');
    },
    Ejemplo2: function (req, res) {
        //res.clearCookie()
        res.clearCookie('pachacama', { path: '/' });
        res.clearCookie('cart', { path: '/' });
        res.clearCookie('nombre', { path: '/' });
        res.clearCookie('name', { path: '/' });
        res.clearCookie('rememberme', { path: '/' });
        return res.send('Cookies eliminadas');
    },
    Ejemplo3: function (req, res) {
        //res.created()
        // Este método se utiliza para enviar un 201 respuesta ( "Creado") de vuelta al cliente que indica que uno o más recursos se han creado con éxito.
        return res.created('Nuevo widget creado.');
    },
    Ejemplo4: function (req, res) {
        // res.forbidden ()
        //Este método se utiliza para enviar un 403 respuesta ( "Prohibido") de vuelta al cliente indicando que la solicitud no está permitido.
        if (!req.session.canEditSalesforceLeads) {
            return res.forbidden('Se requiere acceso de escritura');
        }
    },
    Ejemplo5: function (req, res) {
        // res.set()
        res.set({ 'cabecera': 'hola',
            'Cabecera2': '12345',
            'Cabecera3': 1234567 });
        return res.send('Cabecera añadida');
    },
    Ejemplo6: function (req, res) {
        // res.get ()
        // Devuelve el valor actual de la cabecera de respuesta especificado ( header).
        res.set('cabecera', 'hola');
        return res.send(res.get('cabecera'));
    },
    Ejemplo7: function (req, res) {
        // res.json ()
        // Envía una respuesta JSON
        //return res.json(null);
        //return res.json({ usuario: 'Jonathan' });
        return res.json(500, { error: 'message' });
    },
};
