const express = require('express');
const app = express();
const port = 8080;
// const path = require('path');
// const bodyParser = require('body-parser');
const request = require('request');
const keyHost = require('./APIkeys.js');

// console.log('KEY INFO: ', keyHost.keyInfo.xRapidApiKey)



app.get('/', (req, res) => {
    res.send('Hello Worlddd!')
})

// let data = {
//     keyInfo:
//     {
//         xRapidApiKey: '964b58f1dbmshbd6688ef7750c2ap1a6bddjsn27f00b87431b',
//         xRapidApiHost: 'movie-database-imdb-alternative.p.rapidapi.com'
//     }
// }

app.get('/movies', function (req, res) {
    // res.send('pong ping pong');


    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        qs: { s: 'Avengers Endgame', page: '1', r: 'json' },
        headers: {
            'x-rapidapi-key': keyHost.keyInfo.xRapidApiKey,
            'x-rapidapi-host': keyHost.keyInfo.xRapidApiHost,
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        // console.log(body);
        res.send(body);

    });

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