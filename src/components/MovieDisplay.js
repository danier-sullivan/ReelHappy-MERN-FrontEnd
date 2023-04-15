import React from 'react'
import HappinessRating from './HappinessRating';

const MovieDisplay=(props)=>{
    let avgHappiness=""
    if (props.movie.avgHappiness){
        avgHappiness=<h2>Average Rating:{props.movie.avgHappiness}</h2>
    }
    else{
        avgHappiness=<h2>Movie has no scores yet! Be the first to rate it!</h2>
    }

    return(
        <div className = "showMovie">
            <h1>{props.movie.title}</h1>
            <img src={props.movie.img} alt={props.movie.title}/>
            <h2>{props.movie.year}</h2>
            <h2>{props.movie.genre}</h2>
            {avgHappiness}
            <HappinessRating movie={props.movie} refreshMovie={props.refreshMovie} URL={props.URL}/>
        </div>
    )
}

export default MovieDisplay;