const express = require('express');
const app = express();
const port = 8080;
// const path = require('path');
// const bodyParser = require('body-parser');


app.get('/', (req, res) => {
    res.send('Hello Worlddd!')
})

app.get('/ping', function (req, res) {
    res.send('pong ping pong');
});

app.get('/test', function (req, res) {
    res.send('test pong');
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})