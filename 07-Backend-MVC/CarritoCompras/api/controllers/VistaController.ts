declare var module;
module.exports = {
  vistaOculta:(req,res)=>{
    return res.view('Oculto/sorpresa')
  },

  homepage:(req,res)=>{
    // let usuarioModelo ={
    //   nombres: 'joanathan',
    //   apellidos:"Pachacama",
    //   id:"1",
    // };

    Usuario.find().exec((err, usuariosEncontrados)=>{
      if (err)return res.negotiate(err);
      return res.view('homepage',{
        usuarios:usuariosEncontrados
      })

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
  }

};
