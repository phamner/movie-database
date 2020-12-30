import styled from 'styled-components';

//All of the below are images for each news organization
import ABCNews from './images/ABCNews.png';
import HuffingtonPost from './images/HuffingtonPost.png';
import Inc from './images/Inc.png';
import MobiHealthNews from './images/MobiHealthNews.png';
import TheWallStreetJournal from './images/TheWallStreetJournal.png';
import TIME from './images/TIME.png';

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
    // console.log(props.caroselItem.header)
    //PREVIOUS IMPLEMENTATION BELOW:
    // let stars = '';

    // if (props.stars !== null) {
    //     let allStars = ''
    //     for (let i = 0; i < props.caroselItem.stars; i++) {
    //         stars += `STAR`
    //     }
    // }

    //NEW IMPLEMENTATION:

    // Determines which news organization icon to use
    let currentIcon;
    if (props.caroselItem.icon === 'ABCNews') {
        currentIcon = ABCNews
    } else if (props.caroselItem.icon === 'HuffingtonPost') {
        currentIcon = HuffingtonPost
    } else if (props.caroselItem.icon === 'Inc') {
        currentIcon = Inc
    } else if (props.caroselItem.icon === 'MobiHealthNews') {
        currentIcon = MobiHealthNews
    } else if (props.caroselItem.icon === 'TheWallStreetJournal') {
        currentIcon = TheWallStreetJournal
    } else if (props.caroselItem.icon === 'TIME') {
        currentIcon = TIME
    }

    let SingleStar = <img src={Star} alt="*" height="15" />
    let starCounterId = 0;

    //Iterates through number of stars for each item and creates new img for each, using the SingleStar image
    let children = props.caroselItem.starsArray.map((val) => {
        starCounterId++;
        return (
            <div id={starCounterId} key={starCounterId}>&nbsp;{SingleStar}&nbsp;</div>
        )
    });

    //Checks to see if there are no stars for this carousel item.
    if (props.caroselItem.starsArray.length < 1 || props.caroselItem.starsArray === null) {
        children = <div id={starCounterId}>&nbsp;</div>
    }

    //For clarity.  Allows user to check out the relevant article 
    let linkToArticle = props.caroselItem.link;
    let headerText = props.caroselItem.header;

    return (
        <CarouselItemWrapper>
            <StarWrapper>
                {children}
            </StarWrapper>
            {/* {stars} */}
            <img src={currentIcon} alt="ICON" height="40" />
            <HeaderWrapper>
                <h4>{headerText}</h4>
            </HeaderWrapper>

            <MainTextWrapper>
                <p>{props.caroselItem.mainText}</p>
            </MainTextWrapper>
            <ReadArticleDivWrapper>
                <ReadArticlePWrapper onClick={() => window.location.href = linkToArticle}>Read article</ReadArticlePWrapper>
            </ReadArticleDivWrapper>
        </CarouselItemWrapper>
    )
}

export default CarouselHolder;