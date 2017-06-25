/**
 * Created by visitante on 25/06/2017.
 */
declare var module;
declare var sails;
//////////////////////////////// Deber

module.exports = {
  Ejemplo:(req,res)=>{

    //res.cookie()

    res.cookie('pachacama', 24, { maxAge: 900000, httpOnly: true });//con limite de tiempo
    res.cookie('cart', { items: [1,2,3] }, { maxAge: 900000 }); //pasando un objeto
    res.cookie('nombre', 'pool', { signed: true });//firmada

    res.cookie('name', 'tobi', {
      domain: '.example.com',
      path: '/Ejemplo',
      secure: true
    });

    res.cookie('rememberme', '1', {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    });
    return res.send('Cookie seteada');

  },
};