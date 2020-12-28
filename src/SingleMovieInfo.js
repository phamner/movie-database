const SingleMovieInfo = function (props) {
    console.log('SingleMovieInfo: ', props.currentMovieData)
    return (
        <div>
            <button onClick={() => {
                props.returnToMovieList();
            }}>Return To Movie List</button>

            <div>
                <h4>{props.currentMovieData.Title}</h4>
                <h4>{props.currentMovieData.Actors}</h4>
                <h4>{props.currentMovieData.Awards}</h4>
                <h4>{props.currentMovieData.BoxOffice}</h4>
                <p>{props.currentMovieData.Plot}</p>
                <img src={props.currentMovieData.Poster} alt="Movie Poster"></img>
                <h4>{props.currentMovieData.Production}</h4>
                <h4>{props.currentMovieData.Released}</h4>

            </div>
        </div>
    )
}

export default SingleMovieInfo;