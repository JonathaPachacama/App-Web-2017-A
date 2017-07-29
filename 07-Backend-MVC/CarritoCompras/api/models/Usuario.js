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
            required: true
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
