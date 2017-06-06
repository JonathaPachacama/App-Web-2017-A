//index.js
var Passwords = require('machinepack-passwords'); //guardo_todo el paquete en la variable Passwords
exports.calculadoUdla = {
    sumar:(n1,n2)=>{
        return n1+n2;
    },
    restar:(n1,n2)=>{
        return n1-n2;
    },
    multiplicar:(n1,n2)=>{
        return n1*n2;
    },

    passwords:Passwords

};