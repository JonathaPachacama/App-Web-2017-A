//En typescript pdemos usar arrow fuction
module.exports = {
    //response.json({saluso:"hola"})
    welcome: function (req, res) {
        //POST
        //.error
        //.silly
        sails.log.info(req.method);
        req.method; //Metodo : GET POST PUT DELETE
        //Si no ponen el metodo devolver
        //return res.send("Error en metodo")
        //Metodo:perteneces al req.method;
        return res.json({ saludo: "hola" });
        // return res.send("Error en metodo")
    },
    //otra ruta que hace lo mismo pero resumen res y req y evia texto plano
    bienvenido: function (req, res) {
        //PUT
        return res.json("hola");
    },
};
