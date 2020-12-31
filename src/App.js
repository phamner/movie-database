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
  background-color: #333;
  border: 1px solid black;
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.25em;
`

const SearchInputs = styled.div`
  width: 435px;
  margin:0 auto;
`

const SearchButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 1em 1em 1em 0;
  padding: 0.25em;
  border: 1px solid black;
  overflow: hidden; 
  float:left;
  cursor: pointer;
`;


function App() {

  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(1);
  const [currentSearchString, setCurrentSearchString] = useState('');
  const [currentMovieData, setCurrentMovieData] = useState('');
  const [currentMovieID, setCurrentMovieID] = useState('tt1073510');
  const [singleMovieSelected, setSingleMovieSelected] = useState(false);
  const [displayMovieList, setdisplayMovieList] = useState('initial');

  const [carouselPosition, setCarouselPosition] = useState(0);
  const [leftMostPosition, setleftMostPosition] = useState(0);
  const [rightMostPosition, setRightMostPosition] = useState(0);

  const shiftViewLeftBackwards = function () {
    if (carouselPosition < leftMostPosition) {
      setCarouselPosition(carouselPosition + 1194)
    }
  }

  const shiftViewRightForward = function () {
    if (carouselPosition > rightMostPosition) {
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
        //398 item width
        let numberOfMovies = [...response.data.Search].length;
        if (numberOfMovies === 10) {
          setleftMostPosition(1396)
          setCarouselPosition(1396)
          setRightMostPosition(-2186)
        } else if (numberOfMovies === 9) {
          setleftMostPosition(998)
          setCarouselPosition(1200)
          setRightMostPosition(-992)
          //good
        } else if (numberOfMovies === 8) {
          setleftMostPosition(600)
          setCarouselPosition(600)
          setRightMostPosition(-992)
        } else if (numberOfMovies === 7) {
          setleftMostPosition(800)
          setCarouselPosition(800)
          setRightMostPosition(-992)

          //good
        } else if (numberOfMovies === 6) {
          setleftMostPosition(600)
          setCarouselPosition(600)
          setRightMostPosition(202)

          //good?
        } else if (numberOfMovies === 5) {
          setleftMostPosition(-594)
          setCarouselPosition(-594)
          setRightMostPosition(202)

        } else if (numberOfMovies === 4) {
          setleftMostPosition(202)
          setCarouselPosition(202)
          setRightMostPosition(202)

          //good
        } else if (numberOfMovies === 3) {
          // setCarouselPosition(-1390)
          setleftMostPosition(0)
          setCarouselPosition(0)
          setRightMostPosition(1396)


          //good
        } else if (numberOfMovies === 2) {
          setleftMostPosition(-196)
          setCarouselPosition(-196)
          setRightMostPosition(1396)

          //good
        } else if (numberOfMovies === 1) {
          setleftMostPosition(0)
          setRightMostPosition(1396)


          // setCarouselPosition(-2186)
          //good
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
    setSingleMovieSelected(true);
    // let ID = 'tt1073510';

    axios.get(`/movieinfo?ID=${currentMovieID}`)

      .then(function (response) {
        // handle success
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
    // console.log('click want to go back to movie list');
    setSingleMovieSelected(false);
  }

  let currentMovieListDisplay;

  if (displayMovieList === 'initial') {
    currentMovieListDisplay = <div></div>
  }
  else if (displayMovieList !== 'initial' && movieData.length > 0) {
    currentMovieListDisplay =
      <div>
        <Carousel
          movieData={movieData}
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
  else if (displayMovieList !== 'initial' && movieData.length === 0) {
    currentMovieListDisplay =
      <TotalAppWrapper>
        <NoResultsList />
      </TotalAppWrapper>
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
        <SearchContainer>
          <SearchInputs>
            <Form onChange={(value) => { setCurrentSearchString(value) }} />
            <SearchButton onClick={() => {
              searchMovies();
              setdisplayMovieList('');
            }}>
              Search Movies
          </SearchButton>
          </SearchInputs>
        </SearchContainer>

        {currentMovieListDisplay}

      </TotalAppWrapper >
    );
  }
}

export default App;
