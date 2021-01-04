import styled from 'styled-components';
import './styles.css';
import axios from 'axios';

const CarouselItemWrapper = styled.div`
width: 330px;
height: 630px;
background-color: #ffffff;
cursor: pointer;
color: black;
border: 2px solid #ffffff;
margin: 16px;
padding: 16px;
box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.13);
`

const ImageWrapper = styled.div`
    height: 500px;
    // border: 0.5px solid blue;
    overflow: hidden;
`



function CarouselItem(props) {

    let movieID = props.movieData.imdbID

    let getMoreInfoOnMovie = function () {
        props.movieFuncs.setSingleMovieSelected(true);

        axios.get(`/movieinfo?ID=${movieID}`)

            .then(function (response) {
                // handle success
                props.movieFuncs.setCurrentMovieData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    let imdbID = props.movieData.imdbID;
    let imageURL = props.movieData.Poster;
    let image = <img src={imageURL} alt="No Image Found" width="330"></img>
    let imdbIDurl = `https://www.imdb.com/title/${props.movieData.imdbID}/?ref_=hm_fanfav_tt_2_pd_fp1`

    return (
        <CarouselItemWrapper onClick={() => {

            props.movieFuncs.setCurrentMovieID(imdbID);
            getMoreInfoOnMovie();

        }}>
            <div>
                <ImageWrapper>
                    <div>{image}</div>
                </ImageWrapper>

                <h3>{props.movieData.Title}</h3>
                <h4>{props.movieData.Year}</h4>
            </div>

        </CarouselItemWrapper>
    )
}

export default CarouselItem;