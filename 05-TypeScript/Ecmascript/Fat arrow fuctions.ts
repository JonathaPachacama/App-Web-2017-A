function holaMundo(){
    console.log("hola mundo");
}

let holaMundo2 = function () {
    console.log("Hola mundo");
};

let holaMundo3 = ()=>{
    console.log("Hola mundo");
};
//devuelve undefine (quiere decir ke es una funcion VOID)
let holaMundo4=()=>console.log("Hola mundo");


// usamos las llaves cuando necesitemos utilisar un bloque de codigo
let holaMundo41=()=>{
    console.log("Hola mundo");
    console.log("Hola mundo");
    console.log("Hola mundo");
    console.log("Hola mundo");
};

let holaMundo5 = function () {
    return 5;
};
// para devolver algo corto
let holaMundo6 = ()=>5;  //cuando solo es una linea de codigo

//ponemos llave cuando usamos mas lineas de codigo
let holaMundo61 = ()=>{
    let a=2;
    return a +3;
};

//los parentesis se pueden omiten cuando solo hay UN PARAMETRO
let saludar = nombre => "Hola "+ nombre;  //esta funcion devuelve un tipo de variable string

let saludarConApellido = (nombre,apellido)=>`
Hola ${nombre}  ${apellido}
`;

console.log(saludarConApellido("Jonathan","Pachacama"));  // para correr siempre tenemos que console.logear o sino no aparecera nada