const SingleMovieInfo = function (props) {
    console.log('SingleMovieInfo: ', props.currentMovieData)
    return (
        <div>
            <button onClick={() => {
                props.returnToMovieList();
            }}>Return To Movie List</button>

            <div>
                <h4>{props.currentMovieData.Title}</h4>
                <h4>Actors: {props.currentMovieData.Actors}</h4>
                <h4>Awards: {props.currentMovieData.Awards}</h4>
                <h4>BoxOffice: {props.currentMovieData.BoxOffice}</h4>
                <img src={props.currentMovieData.Poster} alt="Movie Poster"></img>
                <h4>Production: {props.currentMovieData.Production}</h4>
                <h4>Released: {props.currentMovieData.Released}</h4>

                <p>Country: {props.currentMovieData.Country}</p>
                <p>Director: {props.currentMovieData.Director}</p>
                <p>Genre: {props.currentMovieData.Genre}</p>
                <p>Language: {props.currentMovieData.Language}</p>
                <p>Metascore: {props.currentMovieData.Metascore}</p>
                <p>Production: {props.currentMovieData.Production}</p>
                <p>Rated: {props.currentMovieData.Rated}</p>
                {/* <p>{props.currentMovieData.Ratings}</p> */}
                <p>Release Date: {props.currentMovieData.Released}</p>
                <p>Runtime: {props.currentMovieData.Runtime}</p>

                <p>Plot: {props.currentMovieData.Plot}</p>

                <p>Website: {props.currentMovieData.Website}</p>
                <p>Writer: {props.currentMovieData.Writer}</p>
                <p>Year: {props.currentMovieData.Year}</p>
                <p>imdbRating: {props.currentMovieData.imdbRating}</p>
                <p>imdbVotes: {props.currentMovieData.imdbVotes}</p>

            </div>
        </div>
    )
}

export default SingleMovieInfo;