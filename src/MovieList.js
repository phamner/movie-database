import MovieListItem from './MovieListItem.js';
import './styles.css';


function MovieList(props) {
    console.log('movieList Data: ', props)
    return (
        <div>
            <MovieListItem movieData={props.movieData} />
        </div>
    )
}

export default MovieList