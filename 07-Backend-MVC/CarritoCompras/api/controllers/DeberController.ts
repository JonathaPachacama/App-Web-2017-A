/**
 * Created by visitante on 25/06/2017.
 */
declare var module;
declare var sails;
//////////////////////////////// Deber

module.exports = {
  Ejemplo:(req,res)=>{

    //res.cookie()

    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
    return res.send("Cokie seteada")


  },
};
