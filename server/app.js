const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const request = require('request');
const keyHost = require('./APIkeys.js');


var morgan = require("morgan");
const bodyParser = require('body-parser');


// console.log('KEY INFO: ', keyHost.keyInfo.xRapidApiKey)

app.use(express.static(path.join(__dirname, 'build')));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Hello Worlddd!')
})

app.get('/movies', function (req, res) {
    // res.send('pong ping pong');

    let movieSearchString = req.query.ID;
    let count = req.query.count
    // console.log(movieSearchString, count)


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
        // console.log(body);
        res.send(body);
    });

});

app.get('/movieinfo', function (req, res) {
    let fakeID = 'tt0389790';
    let name = req.query.ID;
    // console.log('query: ', req.query)

    // let imdbIDurl = req.params.imdbIDurl;

    // console.log('name: ', name)

    // res.json({ name });


    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        qs: { i: `${name}`, r: 'json' },
        headers: {
            'x-rapidapi-key': keyHost.keyInfo.xRapidApiKey,
            'x-rapidapi-host': keyHost.keyInfo.xRapidApiHost,
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body)
        // console.log(body);
    });


});

// app.post('/', function (req, res) {
//     res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
// })


app.listen(process.env.PORT || 8080);



// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })