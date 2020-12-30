import styled from 'styled-components';
import './styles.css';

//Image for stars
import Star from './images/Star.png';

const CarouselItemWrapper = styled.div`
width: 330px;
height: 330px;
background-color: #ffffff;
color: black;
border: 2px solid #ffffff;
margin: 16px;
padding: 16px;
box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.13);
`

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

function CarouselHolder(props) {
    console.log('CarouselHolder.js props data: ', props)

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
    let image = <img src={imageURL} alt="Italian Trulli" height="120"></img>
    let imdbIDurl = `https://www.imdb.com/title/${props.movieData.imdbID}/?ref_=hm_fanfav_tt_2_pd_fp1`




    return (
        <CarouselItemWrapper>
            <div className="MovieListItem">
                <h1>{props.movieData.Title}</h1>
                <h4>{props.movieData.Year}</h4>
                <a href={imdbIDurl}>IMBd Info</a>
                <br />
                {/* <button onClick={() => {
                    //Make these two functions call syncronously, in their current order.  Need new CurrentMovieID so we can search for
                    //the correct movie. 
                    // console.log('imdbID is : ', imdbID);
                    props.setCurrentMovieID(imdbID);
                    // console.log('CurrentMovieID: ', currentMovieID)

                    getMoreInfoOnMovie();
                    // setTimeout(() => props.getMoreInfoOnMovie(), 3000)

                }}>click me pls</button> */}
                <div>{image}</div>

            </div>

            {/* 
            <img src={currentIcon} alt="ICON" height="40" />
            <HeaderWrapper>
                <h4>{headerText}</h4>
            </HeaderWrapper>

            <MainTextWrapper>
                <p>{props.caroselItem.mainText}</p>
            </MainTextWrapper>
            <ReadArticleDivWrapper>
                <ReadArticlePWrapper onClick={() => window.location.href = linkToArticle}>Read article</ReadArticlePWrapper>
            </ReadArticleDivWrapper>  */}

        </CarouselItemWrapper>
    )
}

export default CarouselHolder;