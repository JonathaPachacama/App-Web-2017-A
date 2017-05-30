/**
 * Created by visitante on 29/05/2017.
 */
let arregloNotas = [2,8,9,6,7,10,10,6,9];
//concatenando los operadores
let resultadoNotas = arregloNotas.map(
    (valor,indice,arreglo)=>{
        return (valor * 2)/10;
    })
    .some(
        (valor)=>{
            return valor<=0.2;
        }
    );

console.log("resultado concatenar: " + resultadoNotas);  //devuelve false xke no un valor menor que dos


//EVERY  (AND - todos cumple verdadero sino falso)
let resultado2 = arregloNotas.every(
    (valor,indice,areglo)=>{
        return (valor>=7);
    });

console.log("resultado every: "+resultado2);

//SOME  (OR - Si alguno es verdaderp entonces devuelvo true)

let resultado3 = arregloNotas.some(
    (valor,indice,areglo)=>{
        return (valor<2);
    });

console.log("resultado some: "+resultado3);
