import React from 'react';
import CarouselItem from './CarouselItem.js';
import styled from 'styled-components';

const AppWrapper = styled.div`
background-color: #F9F9F9;

color: black;
// border: 2px dashed green;
margin: auto;
text-align: center;
`

const CarouselWindowWrapper = styled.div`
background: transparent;
color: black;
// border: 2px dashed purple;
margin: auto;
text-align: center;
display: flex;
justify-content: center;
overflow: hidden;
width: 1200px;
`

const CarouselWindowAndButtonsWrapper = styled.div`
background: transparent;
color: black;
// border: 2px dashed red;
margin: auto;
text-align: center;
display: flex;
justify-content: center;
overflow: hidden;
// width: 1200px;
`

const CarouselWrapper = styled.div`
color: black;
// border: 2px dashed purple;
margin: auto;
text-align: center;
display: flex;
justify-content: center;
transition: transform 500ms ease;
transform: translate(${props => props.carouselPosition + 'px'});
`

const LeftButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  border: 1px solid black;
  border-radius: 3px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  outline: none;
  box-shadow: none;
  background-color: ${props => (props.carouselPosition < 0) ? "white" : "palevioletred"};
`;

const RightButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  border: 1px solid black;
  border-radius: 3px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  outline: none;
  box-shadow: none;
  background-color: ${props => (props.carouselPosition > 0) ? "white" : "palevioletred"};
`;

const SideButton = styled.button`
  // border: 2px dashed green;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 3px;
  background: white;
  cursor: pointer;
  // border-radius: 50%;
//   height: 370px;
height: 675px;

  width: 75;
  outline: none;
  box-shadow: none;
`;

const Carousel = function (props) {

    console.log('carousel.js props data: ', props)

    let movies = props.movieData;

    let moveForward = '>';
    let moveBack = '<';

    let movieDataArray = [{
        Poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
        Title: "RED",
        Type: "movie",
        Year: "2010",
        imdbID: "tt1245526"
    },
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMzg2Mjg1OTk0NF5BMl5BanBnXkFtZTcwMjQ4MTA3Mw@@._V1_SX300.jpg",
        Title: "RED",
        Type: "movie",
        Year: "2010",
        imdbID: "tt1245527"
    }]

    return (
        <AppWrapper>
            <CarouselWindowAndButtonsWrapper>
                <SideButton type="button" onClick={props.shiftViewLeftBackwards} >{moveBack}</SideButton>

                <CarouselWindowWrapper>
                    <CarouselWrapper carouselPosition={props.carouselPosition}>
                        {movies.map(movieData => <CarouselItem
                            key={movieData.imdbID}
                            movieData={movieData}
                            movieFuncs={props}
                        // getMoreInfoOnMovie={props.getMoreInfoOnMovie}
                        // setCurrentMovieData={props.setCurrentMovieData}

                        />)}
                    </CarouselWrapper>
                </CarouselWindowWrapper>

                <SideButton type="button" onClick={props.shiftViewRightForward}>{moveForward}</SideButton>
            </CarouselWindowAndButtonsWrapper>
            <LeftButton type="button" onClick={props.shiftViewLeftBackwards} carouselPosition={props.carouselPosition}></LeftButton>
            <RightButton type="button" onClick={props.shiftViewRightForward} carouselPosition={props.carouselPosition}></RightButton>
        </AppWrapper>
    );
}

export default Carousel;