import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Example from './Example.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const arrayOfakeMovieData = [
  {
    title: 'Gone with the Wind',
    genre: 'Drama',
    picture: 'people on windy day pic',
    url: 'fakeGWTWurl'
  }, {
    title: 'Tiger King',
    genre: 'Documentary',
    picture: 'a redneck with tiger pic',
    url: 'fakeTKurl'
  }, {
    title: 'March of the Pinguins',
    genre: 'Documentary',
    picture: 'Badass pinguins marching pic',
    url: 'fakeMOTPurl'
  }, {
    title: 'Finding Nemo',
    genre: 'Childrens Animated',
    picture: 'A lost fish picture',
    url: 'fakeFNurl'
  }
]

function App() {



  let testHttpRequestMethod = function () {
    axios.get('/test')
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    axios.get('/test')
      .then(function (response) {
        // handle success
        console.log(response);
        // console.log('fake response');

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  });




  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>You clicked the button {count} times</p>





      <button onClick={() => {
        if (count < arrayOfakeMovieData.length) {
          setMovieData(movieData => [...movieData, arrayOfakeMovieData[count]]);
        }
        setCount(count + 1);
      }}>
        Click me
      </button>

      <button onClick={() => { testHttpRequestMethod() }}>
        Test HTTP request method
      </button>

      <div className="MovieList">
        {movieData.map(movieData => <MovieList movieData={movieData} key={movieData.title} />)}
      </div>

    </div >
  );
}

export default App;
