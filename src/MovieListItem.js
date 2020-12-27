import './styles.css';

function MovieListItem(props) {
    // console.log('movieListItem Data: ', props.movieData)

    let imageURL = props.movieData.Poster;
    let image = <img src={imageURL} alt="Italian Trulli"></img>
    let imdbID = `https://www.imdb.com/title/${props.movieData.imdbID}/?ref_=hm_fanfav_tt_2_pd_fp1`


    return (
        <div className="MovieListItem">
            <h1>{props.movieData.Title}</h1>
            <h4>{props.movieData.Year}</h4>
            <a href={imdbID}>IMBd Info</a>
            <div>{image}</div>

        </div>
    )
}

export default MovieListItem;