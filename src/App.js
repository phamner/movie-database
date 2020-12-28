import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Example from './Example.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form.js';
import SingleMovieInfo from './SingleMovieInfo.js';

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
  const [currentSearchString, setCurrentSearchString] = useState('');
  const [currentMovieData, setCurrentMovieData] = useState('');
  const [currentMovieID, setCurrentMovieID] = useState('');
  const [singleMovieSelected, setSingleMovieSelected] = useState(false);

  let searchMovies = function () {
    axios.get('/movies', {
      params: {
        ID: currentSearchString,
        count: count
      }
    })
      .then(function (response) {
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

  let getMoreInfoOnMovie = function () {
    // console.log('click want to get more info on movie');
    setSingleMovieSelected(true);
    let ID = 'tt1073510';
    console.log('use this instead of the string tt1073510 eventually: ', currentMovieID)
    // currentMovieID

    axios.get(`/movieinfo?ID=${ID}`)

      .then(function (response) {
        // handle success
        // console.log(response.data.Search);a
        // setMovieData(() => [...response.data.Search]);
        // console.log(response.data)
        setCurrentMovieData(response.data)


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  let returnToMovieList = function () {
    console.log('click want to go back to movie list');
    setSingleMovieSelected(false);
  }

  if (singleMovieSelected) {
    return <SingleMovieInfo
      currentMovieData={currentMovieData}
      returnToMovieList={returnToMovieList}
      setCurrentMovieData={setCurrentMovieData}
    />
  } else {
    return (
      <div className="App">
        <h1>The current movie is: {currentSearchString}</h1>
        <Form onChange={(value) => { setCurrentSearchString(value) }} />
        <button onClick={() => { searchMovies() }}>
          Search Movies
        </button>

        <div className="MovieList">
          {movieData.map(movieData => <MovieList
            movieData={movieData}
            key={movieData.imdbID}
            getMoreInfoOnMovie={getMoreInfoOnMovie}
            setCurrentMovieID={setCurrentMovieID}
            setSingleMovieSelected={setSingleMovieSelected}
            setCurrentMovieData={setCurrentMovieData}
            currentMovieID={currentMovieID}
          />)}
        </div>

      </div >
    );
  }
}

export default App;
