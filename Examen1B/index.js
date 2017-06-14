/**
 * Created by visitante on 14/06/2017.
 */
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.post('/informacion', function (req, res) {
    res.send('Got a POST request')
})
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})