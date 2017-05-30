/**
 * Created by visitante on 29/05/2017.
 */
function multiplicarX2(n1,n2){
    let resultado ={
        n1:n1*2,
        n2:n2*2
    }; // nos devuelve un objeto json
    resultado.n1 = resultado.n1*n2;
    resultado.n1 = resultado.n1*n2;

    return resultado;
    //lo mismo de arriba
    // return {
    //     n1:n1*2,
    //     n2:n2*2
    // }

}


//Object literals (nos ahorran poner la asignacion del parametrp cuando el nombre de lo que estamos recibiendo en la funcion es igual al parametro de la funcion)
function multiplicarX2_OL(n1,numero2){
    let resultado ={
        n1,
        numero2
        //n2:numero2  es codigo antiguo
    }; // nos devuelve un objeto json
    resultado.n1 = resultado.n1*numero2;
    resultado.n1 = resultado.n1*numero2;
    return resultado;
}


