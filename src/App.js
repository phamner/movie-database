import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Example from './Example.js';
import React, { useState, useEffect } from 'react';



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
  // const [movieData, setMovieData] = useState([
  //   {
  //     title: 'Gone with the Wind',
  //     genre: 'Drama',
  //     picture: 'people on windy day pic',
  //     url: 'fakeGWTWurl'
  //   }, {
  //     title: 'Tiger King',
  //     genre: 'Documentary',
  //     picture: 'a redneck with tiger pic',
  //     url: 'fakeTKurl'
  //   }, {
  //     title: 'March of the Pinguins',
  //     genre: 'Documentary',
  //     picture: 'Badass pinguins marching pic',
  //     url: 'fakeMOTPurl'
  //   }, {
  //     title: 'Finding Nemo',
  //     genre: 'Childrens Animated',
  //     picture: 'A lost fish picture',
  //     url: 'fakeFNurl'
  //   }
  // ]);

  const [movieData, setMovieData] = useState([]);
  const [count, setCount] = useState(0);


  let fakeMovieData = {
    title: 'Gone with the Wind 2, revenge of scarlet',
    genre: 'Drama lama',
    picture: 'big fight',
    url: 'fakeGWTW2url'
  }

  return (
    <div className="App">




      <button onClick={() => {
        setMovieData(movieData => [...movieData, arrayOfakeMovieData[count]]);
        setCount(count + 1);
        console.log('click');
      }}>
        Click me
      </button>

      <div className="MovieList">
        {movieData.map(movieData => <MovieList movieData={movieData} key={movieData.title} />)}
      </div>

    </div >
  );
}

export default App;
