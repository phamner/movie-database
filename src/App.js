import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form.js';
import SingleMovieInfo from './SingleMovieInfo.js';
import NoResultsList from './NoResultsList.js'
import Carousel from './Carousel.js';
import styled from 'styled-components';

// Goals for project:
// improve search bar css
// make bottom circle buttons reactive, or a group of three
// build css framework for individual movie info
// block arrow buttons from going beyond the movies listed. 
// make an error page if no results show up 


const TotalAppWrapper = styled.div`
background-color: #F9F9F9;
color: black;
// border: 2px dashed green;
margin: auto;
text-align: center;
`


const SearchContainer = styled.div`
  border: 1px solid black;
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding: 0.25em;
  // margin: 0.25em;
`

const SearchButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 1em;
  padding: 0.25em;
  border: 1px solid green;
  overflow: hidden; 
  float:left;
`;



// const arrayOfakeMovieData = [
//   {
//     Poster: "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg",
//     Title: "Avengers Endgame: the Butt Plan",
//     Type: "movie",
//     Year: "2019",
//     imdbID: "tt10399328"

//   }
// ]

function App() {

  // let fakeData = [{
  //   Poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
  //   Title: "from app good data fake tho 1",
  //   Type: "movie",
  //   Year: "2010",
  //   imdbID: "tt1245526"
  // },
  // {
  //   Poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
  //   Title: "from app good data fake tho 2",
  //   Type: "movie",
  //   Year: "2010",
  //   imdbID: "tt1245525"
  // }]


  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(1);
  const [currentSearchString, setCurrentSearchString] = useState('');
  const [currentMovieData, setCurrentMovieData] = useState('');
  const [currentMovieID, setCurrentMovieID] = useState('tt1073510');
  const [singleMovieSelected, setSingleMovieSelected] = useState(false);

  const [displayMovieList, setdisplayMovieList] = useState('initial');

  const [carouselPosition, setCarouselPosition] = useState(0);
  //previously 600

  //no results (initial)  done
  //too many results
  //no results found
  //regular list  done

  const shiftViewLeftBackwards = function () {
    // if (carouselPosition < 590) {
    setCarouselPosition(carouselPosition + 1194)
    // }
  }

  const shiftViewRightForward = function () {
    // if (carouselPosition > -594) {
    setCarouselPosition(carouselPosition - 1194)
  }
  // }



  const searchMovies = function () {
    axios.get('/movies', {
      params: {
        ID: currentSearchString,
        count: count
      }
    })
      .then(function (response) {
        //398 item width
        let numberOfMovies = [...response.data.Search].length;
        if (numberOfMovies === 10) {
          setCarouselPosition(1396)
        } else if (numberOfMovies === 9) {
          setCarouselPosition(998)
        } else if (numberOfMovies === 8) {
          setCarouselPosition(600)
        } else if (numberOfMovies === 7) {
          setCarouselPosition(202)
        } else if (numberOfMovies === 6) {
          // setCarouselPosition(-196)
          setCarouselPosition(600)
          //good?
        } else if (numberOfMovies === 5) {
          setCarouselPosition(-594)
        } else if (numberOfMovies === 4) {
          setCarouselPosition(202)
          //good
        } else if (numberOfMovies === 3) {
          // setCarouselPosition(-1390)
          setCarouselPosition(0)
          //good
        } else if (numberOfMovies === 2) {
          setCarouselPosition(-196)
          //good
        } else if (numberOfMovies === 1) {
          // setCarouselPosition(-2186)
          setCarouselPosition(0)

        }

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

    axios.get(`/movieinfo?ID=${currentMovieID}`)

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

  const returnToMovieList = function () {
    console.log('click want to go back to movie list');
    setSingleMovieSelected(false);
  }

  let currentMovieListDisplay;

  if (displayMovieList === 'initial') {
    currentMovieListDisplay =
      <TotalAppWrapper>
        <NoResultsList />
      </TotalAppWrapper>
  }
  else if (displayMovieList !== 'initial' && movieData.length > 0) {
    currentMovieListDisplay =
      <div>
        <Carousel
          movieData={movieData}
          // fakeData={fakeData}
          getMoreInfoOnMovie={getMoreInfoOnMovie}
          shiftViewLeftBackwards={shiftViewLeftBackwards}
          shiftViewRightForward={shiftViewRightForward}
          carouselPosition={carouselPosition}
          setCurrentMovieID={setCurrentMovieID}
          setSingleMovieSelected={setSingleMovieSelected}
          setCurrentMovieData={setCurrentMovieData}
        />


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
      <TotalAppWrapper>
        {/* <h1>The current movie is: {currentSearchString}</h1> */}

        <SearchContainer>
          <Form onChange={(value) => { setCurrentSearchString(value) }} />
          <SearchButton onClick={() => {
            searchMovies();
            setdisplayMovieList('');
          }}>
            Search Movies
          </SearchButton>
        </SearchContainer>


        {/* Movies display */}
        {currentMovieListDisplay}

      </TotalAppWrapper >
    );
  }
}

export default App;
