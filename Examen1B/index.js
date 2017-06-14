/**
 * Created by visitante on 14/06/2017.
 */
const express = require('express')
const app = express()
const fs = require('fs');

//ejemplo
app.get('/bienvenido', function (req, res) {
    res.send('Hello World!')
})

//Ruta Informacion
app.post('/informacion', function (req, res) {
    fs.readFile('Informacion.txt', 'utf8',
        function(err, data) {
            if (err) throw err;
            console.log(data);
            res.send(data);
        });
})
//Ruta Facultad de Sistemas
app.get('/facultaddesistemas', app.use(express.static('public')));

//Ruta Cabeceras
app.post('/cabeceras', function (req, res) {
    res.append('fecha',new Date()); //cabecera 1
    res.append('Metodo',req.method); //cabecera 2
    res.append('Direccion-ip',req.ip); //cabecera 3
    res.append('url-original', req.originalUrl); //cabecera 4
    res.append('protocolo',req.protocol); //cabecera 5
    res.send();
})

//Ruta SetCookies

app.get('/setcookie', function (req, res) {
    res.cookie('pachacama', 24)
    res.send('Cookie seteada')
})

//Ruta ClearCookie
app.get('/clearcookie', function (req, res) {
    res.clearCookie("pachacama")
    res.send('Cookie eliminada')
})
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})



