import './styles.css';
import axios from 'axios';



function MovieListItem(props) {

    let movieID = props.movieData.imdbID

    let getMoreInfoOnMovie = function () {
        props.setSingleMovieSelected(true);
        // console.log('use this instead of the string tt1073510 eventually: ', movieID)

        axios.get(`/movieinfo?ID=${movieID}`)

            .then(function (response) {
                // handle success
                props.setCurrentMovieData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    let imdbID = props.movieData.imdbID;
    let imageURL = props.movieData.Poster;
    let image = <img src={imageURL} alt="Italian Trulli"></img>
    let imdbIDurl = `https://www.imdb.com/title/${props.movieData.imdbID}/?ref_=hm_fanfav_tt_2_pd_fp1`

    return (
        <div className="MovieListItem">
            <h1>{props.movieData.Title}</h1>
            <h4>{props.movieData.Year}</h4>
            <a href={imdbIDurl}>IMBd Info</a>
            <br />
            <button onClick={() => {
                //Make these two functions call syncronously, in their current order.  Need new CurrentMovieID so we can search for
                //the correct movie. 
                // console.log('imdbID is : ', imdbID);
                props.setCurrentMovieID(imdbID);
                // console.log('CurrentMovieID: ', currentMovieID)

                getMoreInfoOnMovie();
                // setTimeout(() => props.getMoreInfoOnMovie(), 3000)

            }}>click me pls</button>
            <div>{image}</div>

        </div>
    )
}

export default MovieListItem;