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

    let movieSearchString = req.query.ID;
    let count = req.query.count
    // console.log(req.query.ID)


    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        qs: { s: `${movieSearchString}`, page: `${count}`, r: 'json' },
        headers: {
            'x-rapidapi-key': keyHost.keyInfo.xRapidApiKey,
            'x-rapidapi-host': keyHost.keyInfo.xRapidApiHost,
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        res.send(body);
    });

});

//not working yet.
app.get('/movieinfo', function (req, res) {
    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        qs: { i: 'tt4154796', r: 'json' },
        headers: {
            'x-rapidapi-key': '964b58f1dbmshbd6688ef7750c2ap1a6bddjsn27f00b87431b',
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body)
        console.log(body);
    });


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