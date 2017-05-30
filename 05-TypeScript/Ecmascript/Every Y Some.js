/**
 * Created by visitante on 29/05/2017.
 */
var arregloNotas = [2, 8, 9, 6, 7, 10, 10, 6, 9];
//concatenando los operadores
var resultadoNotas = arregloNotas.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
})
    .some(function (valor) {
    return valor <= 0.2;
});
console.log("resultado concatenar: " + resultadoNotas); //devuelve false xke no un valor menor que dos
//EVERY  (AND - todos cumple verdadero sino falso)
var resultado2 = arregloNotas.every(function (valor, indice, areglo) {
    return (valor >= 7);
});
console.log("resultado every: " + resultado2);
//SOME  (OR - Si alguno es verdaderp entonces devuelvo true)
var resultado3 = arregloNotas.some(function (valor, indice, areglo) {
    return (valor < 2);
});
console.log("resultado some: " + resultado3);
