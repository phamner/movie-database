import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form.js';
import SingleMovieInfo from './SingleMovieInfo.js';
import NoResultsList from './NoResultsList.js'
import Carousel from './Carousel.js';


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

  let fakeData = [{
    Poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
    Title: "from app good data fake tho 1",
    Type: "movie",
    Year: "2010",
    imdbID: "tt1245526"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
    Title: "from app good data fake tho 2",
    Type: "movie",
    Year: "2010",
    imdbID: "tt1245525"
  }]


  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(1);
  const [currentSearchString, setCurrentSearchString] = useState('');
  const [currentMovieData, setCurrentMovieData] = useState('');
  const [currentMovieID, setCurrentMovieID] = useState('');
  const [singleMovieSelected, setSingleMovieSelected] = useState(false);

  const [displayMovieList, setdisplayMovieList] = useState('initial');

  const [carouselPosition, setCarouselPosition] = useState(600);
  //no results (initial)  done
  //too many results
  //no results found
  //regular list  done

  const shiftViewLeftBackwards = function () {
    if (carouselPosition < 590) {
      setCarouselPosition(carouselPosition + 1194)
    }
  }

  const shiftViewRightForward = function () {
    if (carouselPosition > -594) {
      setCarouselPosition(carouselPosition - 1194)
    }
  }



  const searchMovies = function () {
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

  // let getMoreInfoOnMovie = function () {
  //   // console.log('click want to get more info on movie');
  //   setSingleMovieSelected(true);
  //   let ID = 'tt1073510';
  //   console.log('use this instead of the string tt1073510 eventually: ', currentMovieID)
  //   // currentMovieID

  //   axios.get(`/movieinfo?ID=${ID}`)

  //     .then(function (response) {
  //       // handle success
  //       // console.log(response.data.Search);a
  //       // setMovieData(() => [...response.data.Search]);
  //       // console.log(response.data)
  //       setCurrentMovieData(response.data)


  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // }

  const returnToMovieList = function () {
    console.log('click want to go back to movie list');
    setSingleMovieSelected(false);
  }

  let currentMovieListDisplay;
  if (displayMovieList === 'initial') {
    currentMovieListDisplay = <NoResultsList />
  }
  else if (displayMovieList !== 'initial' && movieData.length > 0) {
    currentMovieListDisplay =
      <div>
        <Carousel
          movieData={movieData}
          fakeData={fakeData}
          shiftViewLeftBackwards={shiftViewLeftBackwards}
          shiftViewRightForward={shiftViewRightForward}
          carouselPosition={carouselPosition}
        />
        {/* {movieData.map(movieData => <Carousel
          movieData={movieData}
          key={movieData.imdbID}
          // getMoreInfoOnMovie={getMoreInfoOnMovie}
          setCurrentMovieID={setCurrentMovieID}
          setSingleMovieSelected={setSingleMovieSelected}
          setCurrentMovieData={setCurrentMovieData}
          currentMovieID={currentMovieID}
        />)} */}

        <div className="MovieList">

          {movieData.map(movieData => <MovieList
            movieData={movieData}
            key={movieData.imdbID}
            // getMoreInfoOnMovie={getMoreInfoOnMovie}
            setCurrentMovieID={setCurrentMovieID}
            setSingleMovieSelected={setSingleMovieSelected}
            setCurrentMovieData={setCurrentMovieData}
            currentMovieID={currentMovieID}
          />)}
        </div>

      </div>

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
        <button onClick={() => {
          searchMovies();
          setdisplayMovieList('');
        }}>
          Search Movies
        </button>
        {currentMovieListDisplay}

      </div >
    );
  }
}

export default App;
