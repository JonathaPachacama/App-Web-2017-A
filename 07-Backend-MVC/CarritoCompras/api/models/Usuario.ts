/**
 * Created by visitante on 26/06/2017.
 */
declare var module:any;
var Passwords = require('machinepack-passwords');
module.export={
  attributes:{
    nombres:{
      type:"string"
    },
    apellidos:{
      type:"string"
    },
    password:{
      type:"string",
      required:true
    },
    correo:{
      type:"email"
    },
    fechaNacimiento:{
      type:"date"
    }
  },
  beforeCreate: function (usuario,cb) {

    Passwords.encryptPassword({password: usuario.password}).exec({
      error: (err) => {
        cb("error en hash Password",err)
      },
      success:(hashedPassword)=>{
        usuario.password = hashedPassword;
        cb()
      },
    });
  },

  beforeUpdate: (valorAActualizar,cb)=>{
    if (valorAActualizar.password) {
      Passwords.encryptPassword({
        password: valorAActualizar.password
      })
        .exec(
          {
            error:(err) =>{
              cb("error en hash Password",err)
            },
            success: (hashedPassword)=>{
              valorAActualizar.password = hashedPassword;
              cb()
            },
          });
    }else{
      cb();
    }


  }
};
