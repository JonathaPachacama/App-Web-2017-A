function holaMundo() {
    console.log("hola mundo");
}
var holaMundo2 = function () {
    console.log("Hola mundo");
};
var holaMundo3 = function () {
    console.log("Hola mundo");
};
//devuelve undefine (quiere decir ke es una funcion VOID)
var holaMundo4 = function () { return console.log("Hola mundo"); };
// usamos las llaves cuando necesitemos utilisar un bloque de codigo
var holaMundo41 = function () {
    console.log("Hola mundo");
    console.log("Hola mundo");
    console.log("Hola mundo");
    console.log("Hola mundo");
};
var holaMundo5 = function () {
    return 5;
};
// para devolver algo corto
var holaMundo6 = function () { return 5; }; //cuando solo es una linea de codigo
//ponemos llave cuando usamos mas lineas de codigo
var holaMundo61 = function () {
    var a = 2;
    return a + 3;
};
//los parentesis se pueden omiten cuando solo hay UN PARAMETRO
var saludar = function (nombre) { return "Hola " + nombre; }; //esta funcion devuelve un tipo de variable string
var saludarConApellido = function (nombre, apellido) { return "\nHola " + nombre + "  " + apellido + "\n"; };
console.log(saludarConApellido("Jonathan", "Pachacama")); // para correr siempre tenemos que console.logear o sino no aparecera nada
