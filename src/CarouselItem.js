import styled from 'styled-components';
import './styles.css';
import axios from 'axios';

//Image for stars
// import Star from './images/Star.png';

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



// not using the styled components below.

const StarWrapper = styled.div`
background: transparent;
color: black;
// border: 2px dashed blue;
display: flex;
justify-content: center;
margin: 10px;
`

const MainTextWrapper = styled.div`
text-align: left;
background: transparent;
color: black;
// border: 2px dashed blue;
`

const ReadArticlePWrapper = styled.p`
color: blue;
// border: 2px dashed blue;
cursor: pointer;
height: 1rem;
`
const ReadArticleDivWrapper = styled.div`
color: black;
// border: 2px dashed blue;
height: 1rem;
position: absolute;
bottom: 50px;
width: 330px;
margin: 0 auto;
`

const HeaderWrapper = styled.div`
background: transparent;
color: black;
height: 40px;
// border: 2px dashed blue;
`

function CarouselItem(props) {
    console.log('CarouselItem.js props data: ', props)


    let movieID = props.movieData.imdbID

    let getMoreInfoOnMovie = function () {
        props.movieFuncs.setSingleMovieSelected(true);
        // console.log('use this instead of the string tt1073510 eventually: ', movieID)

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


    // let SingleStar = <img src={Star} alt="*" height="15" />
    // let starCounterId = 0;

    //Iterates through number of stars for each item and creates new img for each, using the SingleStar image
    // let children = props.caroselItem.starsArray.map((val) => {
    //     starCounterId++;
    //     return (
    //         <div id={starCounterId} key={starCounterId}>&nbsp;{SingleStar}&nbsp;</div>
    //     )
    // });

    //Checks to see if there are no stars for this carousel item.
    // if (props.caroselItem.starsArray.length < 1 || props.caroselItem.starsArray === null) {
    //     children = <div id={starCounterId}>&nbsp;</div>
    // }

    //For clarity.  Allows user to check out the relevant article 
    // let linkToArticle = props.caroselItem.link;
    // let headerText = props.caroselItem.header;



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
                {/* <a href={imdbIDurl}>IMBd Info</a> */}
            </div>

        </CarouselItemWrapper>
    )
}

export default CarouselItem;