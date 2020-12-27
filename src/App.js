import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Example from './Example.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form.js';


const arrayOfakeMovieData = [
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
    Title: "Avengers Endgame: the Butt Plan",
    Type: "movie",
    Year: "2019",
    imdbID: "tt10399328"

  }
]

function App() {

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked banana times`;

  // });

  const [movieData, setMovieData] = useState(arrayOfakeMovieData);
  const [count, setCount] = useState(1);
  const [currentMovie, setCurrentMovie] = useState('');

  let testHttpRequestMethod = function (testString) {
    axios.get('/movies', {
      params: {
        ID: currentMovie,
        count: count
      }
    })
      .then(function (response) {
        // handle success
        // console.log(response.data.Search);
        setMovieData(() => [...response.data.Search]);
        setCount(count += 1);


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }


  return (
    <div className="App">
      <Form onChange={(value) => { setCurrentMovie(value) }} />
      <h1>The current movie is: {currentMovie}</h1>

      <button onClick={() => { testHttpRequestMethod() }}>
        Test HTTP request method
      </button>

      <div className="MovieList">
        {movieData.map(movieData => <MovieList movieData={movieData} key={movieData.imdbID} />)}
      </div>

    </div >
  );
}

export default App;
