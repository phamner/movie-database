import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Example from './Example.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const arrayOfakeMovieData = [
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
    Title: "Avengers Endgame: the Butt Plan",
    Type: "movie",
    Year: "2019",
    imdbID: "tt10399328"

  }
  // {
  //   title: 'Gone with the Wind',
  //   genre: 'Drama',
  //   picture: 'people on windy day pic',
  //   url: 'fakeGWTWurl'
  // }, {
  //   title: 'Tiger King',
  //   genre: 'Documentary',
  //   picture: 'a redneck with tiger pic',
  //   url: 'fakeTKurl'
  // }, {
  //   title: 'March of the Pinguins',
  //   genre: 'Documentary',
  //   picture: 'Badass pinguins marching pic',
  //   url: 'fakeMOTPurl'
  // }, {
  //   title: 'Finding Nemo',
  //   genre: 'Childrens Animated',
  //   picture: 'A lost fish picture',
  //   url: 'fakeFNurl'
  // }
]

function App() {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked banana times`;

  });

  const [movieData, setMovieData] = useState(arrayOfakeMovieData);
  const [count, setCount] = useState(0);

  let testHttpRequestMethod = function () {
    axios.get('/movies')
      .then(function (response) {
        // handle success
        // console.log(response.data.Search);
        setMovieData(movieData => [...movieData.concat(response.data.Search)]);


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
      {/* <p>You clicked the button {count} times</p>

      <button onClick={() => {
        if (count < arrayOfakeMovieData.length) {
          setMovieData(movieData => [...movieData, arrayOfakeMovieData[count]]);
        }
        setCount(count + 1);
      }}>
        Click me
      </button> */}

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
