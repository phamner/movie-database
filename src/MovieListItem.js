import './styles.css';

function MovieListItem(props) {
    return (
        <div className="MovieListItem">
            <h1>{props.movieData.title}</h1>
            <h4>{props.movieData.genre}</h4>
            <h4>{props.movieData.url}</h4>
            <h4>{props.movieData.picture}</h4>
        </div>

    )
}

export default MovieListItem;