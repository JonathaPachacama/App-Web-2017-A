/**
 * Created by visitante on 29/05/2017.
 */
let arreglo = [1,2,3,4,5];
//Map me devuelve un arreglo

//devolver el arreglo sumandole uno a cada elemento
let resultado2 = arreglo.map(
    (valor,indice,arreglo)=>{
        return valor + 1;
});

console.log(resultado2);

//multiplicar el valos por el indice
let resultado3 = arreglo.map(
    (valor,indice,arreglo)=>{
        return valor * indice;
    });

//para sacar promedios
let arregloNotas = [4,6,7,4,10];

console.log(resultado3);

let resultadoNotas = arreglo.map(
    (valor,indice,arreglo)=>{
        return (valor * 2)/10;
    });

console.log(resultadoNotas);