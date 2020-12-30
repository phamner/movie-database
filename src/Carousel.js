import React from 'react';
import CarouselHolder from './CarouselHolder.js';
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
  height: 370px;
  width: 75;
  outline: none;
  box-shadow: none;
`;

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caroselItems: [
                {
                    icon: 'TIME',
                    mainText: '“It can take more than three weeks to get an appointment with a new doctor, but now, people in all 50 states can visit a physician throught their smartphone. Telemedicine has been touted as the next big thing for several years, and it’s finally…”',
                    header: 'Are Digital Doctors the Future?',
                    link: 'https://time.com/4766297/digital-doctors-future/',
                    stars: 4,
                    starsArray: ['*', '*', '*', '*']
                },
                {
                    icon: 'ABCNews',
                    mainText: '"Because this has been such a bad flu season, we have seen a 100 percent increase in volume," Dr. Ian Tong, the chief medical officer at Doctor On Demand, told...',
                    header: 'More people turning to virtual health care options amidst deadly flu epidemic',
                    link: 'https://abcnews.go.com/Health/people-turning-virtual-health-care-options-amidst-deadly/story?id=52564574',
                    stars: null,
                    starsArray: []

                },
                {
                    icon: 'TheWallStreetJournal',
                    mainText: 'An online dollar store. Two services that link board-certified physicians and licensed psychiatrists and patients by video chat. A cybersecurity company that keeps hackers out of cars. These startups are part of the eclectic mix that makes up The Wall Street Journal’s ranking of 25 technology co…',
                    header: 'Top 25 Tech Companies to Watch',
                    link: 'https://www.wsj.com/articles/top-25-tech-companies-to-watch-1497492480',
                    stars: 2,
                    starsArray: ['*', '*']
                },
                {
                    icon: 'MobiHealthNews',
                    mainText: '“The launch of Synapse marks a major milestone for Doctor On Demand and the larger telemedicine industry...',
                    header: 'Doctor On Demand Launches Synapse, a New Virtual Care Platform',
                    link: 'https://www.mobihealthnews.com/content/doctor-demand-launches-integrated-virtual-primary-care-platform',
                    stars: 3,
                    starsArray: ['*', '*', '*']
                },
                {
                    icon: 'Inc',
                    mainText: '“Yosselyn Dupuis, Director of HR, PHR for telemedicine company Doctor On Demand, says there are three big hurdles that people have to overcome to get a plan that...',
                    header: 'Want More From Your Health Care Plan? 3 Sure-fire Ways to Get It',
                    link: 'https://www.inc.com/wanda-thibodeaux/3-major-challenges-of-getting-great-healthcare-how-to-overcome-them.html',
                    stars: 5,
                    starsArray: ['*', '*', '*', '*', '*']

                },
                {
                    icon: 'HuffingtonPost',
                    mainText: '“If you want to feel better faster, see a doctor as soon as you can,” he said. “If you fall outside the window, Tamiflu [a flu treatment medicine] will not be effective, but your doctor can still recommend symptom…',
                    header: '11 Genius Tips For Managing A Cold Once You\'re Already Sick',
                    link: 'https://www.huffpost.com/entry/cold-and-flu-tips_n_5a1eff05e4b0d52b8dc23eb5',
                    stars: 4,
                    starsArray: ['*', '*', '*', '*']
                }

            ],
            // carouselPosition: the starting position is 590px (previously.  Now using 600px)
            carouselPosition: 600,
            data: props
        };
        this.shiftViewLeftBackwards = this.shiftViewLeftBackwards.bind(this);
        this.shiftViewRightForward = this.shiftViewRightForward.bind(this);
    }

    shiftViewLeftBackwards() {
        let currentPosition = this.state.carouselPosition;
        let newPosition = currentPosition + 1194;
        //1194
        //398


        if (currentPosition < 590) {
            this.setState({
                carouselPosition: newPosition
            })
            // console.log('RIGHT: add 398px to current position: ', this.state.carouselPosition)
        }
        // console.log('RIGHT: no movement: ', this.state.carouselPosition)
    }

    shiftViewRightForward() {
        let currentPosition = this.state.carouselPosition;
        let newPosition = currentPosition - 1194;
        //1194
        //398

        if (currentPosition > -594) {
            this.setState({
                carouselPosition: newPosition
            })
            // console.log('LEFT: add 398px to current position: ', this.state.carouselPosition)
        }
        // console.log('LEFT: no movement: ', this.state.carouselPosition)
    }

    render(props) {
        // console.log('data: ', this.state.data)
        // let movieDataArray = this.state.data;
        console.log('carousel.js stateful data: ', this.state.data)
        console.log('carousel.js props data: ', props)




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
                {/* <h1>Doctor on Demand Carousel</h1> */}
                <CarouselWindowAndButtonsWrapper>
                    <SideButton type="button" onClick={this.shiftViewLeftBackwards} >{moveBack}</SideButton>

                    <CarouselWindowWrapper>
                        <CarouselWrapper carouselPosition={this.state.carouselPosition}>
                            {movieDataArray.map(movieData => <CarouselHolder key={movieData.imdbID} movieData={movieData} />)}
                        </CarouselWrapper>
                    </CarouselWindowWrapper>

                    <SideButton type="button" onClick={this.shiftViewRightForward}>{moveForward}</SideButton>
                </CarouselWindowAndButtonsWrapper>
                <LeftButton type="button" onClick={this.shiftViewLeftBackwards} carouselPosition={this.state.carouselPosition}></LeftButton>
                <RightButton type="button" onClick={this.shiftViewRightForward} carouselPosition={this.state.carouselPosition}></RightButton>
            </AppWrapper>
        );
    }
}

export default Carousel;
