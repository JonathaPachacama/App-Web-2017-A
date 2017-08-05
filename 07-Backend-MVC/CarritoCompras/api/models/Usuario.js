//var Passwords = require('machinepack-passwords');
module.export = {
    attributes: {
        nombres: {
            type: "string"
        },
        apellidos: {
            type: "string"
        },
        password: {
            type: "string",
        },
        correo: {
            type: "email"
        },
        fechaNacimiento: {
            type: "date"
        },
        matriculas: {
            collecion: 'Matricula',
            via: 'fkIdUsuario'
        }
    },
};
