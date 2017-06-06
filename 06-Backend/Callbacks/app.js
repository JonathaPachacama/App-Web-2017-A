const fs = require('fs');  //importamos el modulo "fs"

//1-Nombre y ruta del archivo
//2 - Codificacion
//3 - Anonymous Function (error!, contenido del archivo)
console.log("Empienza");

//callback

fs.readFile('texto.txt', 'utf8',
function(err, data) {
    if (err) throw err;
console.log(data);
});
console.log("Termina");


/*
 const calculadora = require('twj-a-jonathan');

 const Passwords = require('machinepack-passwords');


 let a=2,
 b=3,
 resultado;
 resultado = calculadora.calculadoUdla.sumar(a,b);
 console.log(`Resultado es: ${resultado}`);

 let passwordAEncriptar = "1234";
 // Encrypt a string using the BCrypt algorithm.
Passwords.encryptPassword(
 {
 password: passwordAEncriptar,
 }).exec({
 // An unexpected error occurred.
 error: (error)=> {
 console.log(`Error: ${error}`);
 },
 // OK.
 success: (res)=> {
 console.log(`Resultado password a encriptar: ${res}`);
 },
 });

*/
