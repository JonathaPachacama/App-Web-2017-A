/**
 * Created by USRDEL on 6/3/17.
 */

const fs = require('fs');  //importamos las librerias

console.log("Empienza");
fs.readFile('texto.txt', 'utf8',
function(err, data) {
    if (err) throw err;
console.log(data);
});
console.log("Termina");

