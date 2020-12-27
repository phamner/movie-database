import MovieListItem from './MovieListItem.js';
import './styles.css';


function MovieList(props) {
    return (
        <div>
            <MovieListItem
                movieData={props.movieData}
                getMoreInfoOnMovie={props.getMoreInfoOnMovie}
                setCurrentMovieID={props.setCurrentMovieID}
                currentMovieID={props.currentMovieID}
            />
        </div>
    )
}

export default MovieList