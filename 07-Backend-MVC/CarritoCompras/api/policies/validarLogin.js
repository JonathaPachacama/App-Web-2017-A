
module.exports = function(req, res, next) {
  var login = new Date().getFullYear();

  if(login==true){
    return next()//Tienes permiso
  }else{
    return res.forbidden() //redirigirsle al error 403
  }
};
