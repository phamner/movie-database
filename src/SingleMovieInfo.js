import styled from 'styled-components';

const ReturnButton = styled.button`
// font-size: 40px
  height: 60px;
  background: palevioletred;
  border-radius: 3px;
  color: white;
  margin-left: 5em;
  padding: 0.25em;
  border: 1px solid black;
  overflow: hidden; 
  float:left;
  cursor: pointer;
`;

const MovieWrapper = styled.div`
    width: 65%;
    height: 100%;
    background-color: #333333;
    color: #fff;
    border: 2px solid #ffffff;
    margin: auto;
    margin-top: 50px;
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
padding: 0 1em 0 1em;

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
            <ReturnButton onClick={() => { props.returnToMovieList(); }}>Return To Results</ReturnButton >

            <MovieWrapper>
                <h1>{props.currentMovieData.Title}<YearOfRelease>({props.currentMovieData.Year})</YearOfRelease></h1>
                <MovieDetailsWrapper>
                    <p>{props.currentMovieData.Genre}</p>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p>{props.currentMovieData.Released}</p>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p>{props.currentMovieData.Runtime}</p>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <p>Rated {props.currentMovieData.Rated}</p>
                </MovieDetailsWrapper>

                <PhotoAndDetailsContainer>
                    <MoviePhoto src={props.currentMovieData.Poster} alt="Movie Poster"></MoviePhoto>
                    <LowerMovieDetailsWrapper>
                        <p><strong>Actors: </strong>{props.currentMovieData.Actors}</p>
                        <p><strong>Awards: </strong>{props.currentMovieData.Awards}</p>
                        <p><strong>BoxOffice: </strong>{props.currentMovieData.BoxOffice}</p>
                        <p><strong>Production: </strong>{props.currentMovieData.Production}</p>
                        <p><strong>Released: </strong>{props.currentMovieData.Released}</p>
                        <p><strong>Country: </strong>{props.currentMovieData.Country}</p>
                        <p><strong>Director: </strong>{props.currentMovieData.Director}</p>
                        <p><strong>Language: </strong>{props.currentMovieData.Language}</p>
                        <p><strong>Metascore: </strong>{props.currentMovieData.Metascore}</p>
                        <p><strong>Production: </strong>{props.currentMovieData.Production}</p>
                        <p><strong>Website: </strong>{props.currentMovieData.Website}</p>
                        <p><strong>Writer: </strong>{props.currentMovieData.Writer}</p>
                        <p><strong>Year: </strong>{props.currentMovieData.Year}</p>
                        <p><strong>imdbRating: </strong>{props.currentMovieData.imdbRating}</p>
                    </LowerMovieDetailsWrapper>
                </PhotoAndDetailsContainer>

                <p>{props.currentMovieData.Plot}</p>

            </MovieWrapper>
        </div>
    )
}

export default SingleMovieInfo;