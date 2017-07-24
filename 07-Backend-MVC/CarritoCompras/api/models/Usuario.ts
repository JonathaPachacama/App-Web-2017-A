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
      error: function (err) {
        cb("error en hash Password",err)
      },
      success: function (hashedPassword) {
        usuario.password = hashedPassword;
        cb()
      },
    });
  },

  beforeUpdate: function (valorAActualizar,cb) {
    if (valorAActualizar.password) {
      Passwords.encryptPassword({
        password: valorAActualizar.password
      })
        .exec(
          {
            error: function (err) {
              cb("error en hash Password",err)
            },
            success: function (hashedPassword) {
              valorAActualizar.password = hashedPassword;
              cb()
            },
          });
    }else{
      cb();
    }


  }
};
