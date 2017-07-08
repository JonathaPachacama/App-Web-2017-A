declare var module;
module.exports = {
  vistaOculta:(req,res)=>{
    return res.view('Oculto/sorpresa')
  },

  homepage:(req,res)=>{
    let usuarioModelo ={
      nombres: "Jonathan",
      apellidos:"Pachacama",
      id:"1",
    };

    return res.view('homepage',{
      usuario:usuarioModelo
    })
  }

};
