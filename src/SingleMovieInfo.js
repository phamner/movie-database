import styled from 'styled-components';

const ReturnButton = styled.button`
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

const MovieWrapper = styled.div`
    width: 65%;
    height: 800px;
    background-color: #333333;
    color: #fff;
    border: 2px solid #ffffff;
    margin: auto;
    padding: 16px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.13);
`

const MovieDetailsWrapper = styled.div`
text-align: left;
background: transparent;
color: #fff;
// border: 1px dashed blue;
display: flex;
// margin: 5px;
padding: 5px;

`

const LowerMovieDetailsWrapper = styled.div`
text-align: left;
background: transparent;
color: #fff;
// border: 1px dashed blue;
// display: flex;
margin: 5px;

`

const YearOfRelease = styled.span`
color: silver;
// border: 2px dashed blue;
font-size: 25px;
margin: 5px;

`

const PhotoAndDetailsContainer = styled.div`
text-align: left;
background: transparent;

// color: #fff;
// border: 1px dashed blue;
display: flex;
`

const MoviePhoto = styled.img`
    margin: 5px;
`




const SingleMovieInfo = function (props) {
    console.log('SingleMovieInfo: ', props.currentMovieData)
    return (
        <div>
            <ReturnButton onClick={() => { props.returnToMovieList(); }}>Return To Movie List</ReturnButton>

            <MovieWrapper>
                <h1>{props.currentMovieData.Title}<YearOfRelease>({props.currentMovieData.Year})</YearOfRelease></h1>
                <MovieDetailsWrapper>
                    <p>{props.currentMovieData.Genre}</p>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p>{props.currentMovieData.Released}</p>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p>{props.currentMovieData.Runtime}</p>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p>{props.currentMovieData.Rated}</p>
                </MovieDetailsWrapper>

                <PhotoAndDetailsContainer>
                    <MoviePhoto src={props.currentMovieData.Poster} alt="Movie Poster"></MoviePhoto>
                    <LowerMovieDetailsWrapper>
                        <p>Actors: {props.currentMovieData.Actors}</p>
                        <p>Awards: {props.currentMovieData.Awards}</p>
                        <p>BoxOffice: {props.currentMovieData.BoxOffice}</p>
                        <p>Production: {props.currentMovieData.Production}</p>
                        <p>Released: {props.currentMovieData.Released}</p>

                        <p>Country: {props.currentMovieData.Country}</p>
                        <p>Director: {props.currentMovieData.Director}</p>
                        <p>Language: {props.currentMovieData.Language}</p>
                        <p>Metascore: {props.currentMovieData.Metascore}</p>
                        <p>Production: {props.currentMovieData.Production}</p>
                        {/* <p>{props.currentMovieData.Ratings}</p> */}

                        <p>Plot: {props.currentMovieData.Plot}</p>

                        <p>Website: {props.currentMovieData.Website}</p>
                        <p>Writer: {props.currentMovieData.Writer}</p>
                        <p>Year: {props.currentMovieData.Year}</p>
                        <p>imdbRating: {props.currentMovieData.imdbRating}</p>
                        {/* <p>imdbVotes: {props.currentMovieData.imdbVotes}</p> */}
                    </LowerMovieDetailsWrapper>
                </PhotoAndDetailsContainer>


            </MovieWrapper>
        </div>
    )
}

export default SingleMovieInfo;