/**
 * Created by visitante on 19/06/2017.
 */
declare var module;
declare var sails;

  //En typescript pdemos usar arrow fuction
module.exports = {
  //response.json({saluso:"hola"})
  welcome:(req,res)=>{

    //POST
    //.error
    //.silly
    sails.log.info(req.method);
 
    req.method; //Metodo : GET POST PUT DELETE

    //Si no ponen el metodo devolver
        //return res.send("Error en metodo")
    //Metodo:perteneces al req.method;
    return res.json({saludo:"hola"})
    // return res.send("Error en metodo")
  },


  //otra ruta que hace lo mismo pero resumen res y req y evia texto plano
  bienvenido:(req,res)=>{

    //PUT
    return res.json("hola")
  },
};
