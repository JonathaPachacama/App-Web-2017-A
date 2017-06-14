/**
 * Created by visitante on 14/06/2017.
 */
const express = require('express')
const app = express()
const fs = require('fs');
app.use(express.static('public'));
//Ruta Informacion
app.post('/informacion', function (req, res) {
    res.append('insertar','valor')
    fs.readFile('Informacion.txt', 'utf8',
        function(err, data) {
            if (err) throw err;
            console.log(data);
            res.send(data);
        });
})
//Ruta Facultad de Sistemas
app.get('/facultaddesistemas', function (req, res) {
})

//Ruta Cabeceras
app.post('/cabeceras', function (req, res) {
    res.append('nombre-cabecera','Valor de la cabecera');
})
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})



