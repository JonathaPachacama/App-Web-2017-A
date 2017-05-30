/**
 * Created by visitante on 29/05/2017.
 */
var arreglo = [1, 2, 3, 4, 5];
//Map me devuelve un arreglo
//devolver el arreglo sumandole uno a cada elemento
var resultado2 = arreglo.map(function (valor, indice, arreglo) {
    return valor + 1;
});
console.log(resultado2);
//multiplicar el valos por el indice
var resultado3 = arreglo.map(function (valor, indice, arreglo) {
    return valor * indice;
});
console.log(resultado3);
