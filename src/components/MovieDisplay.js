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
            <h3>{props.movie.year}</h3>
            <h3>{props.movie.genre}</h3>
            <h3>{avgHappiness}</h3>
            <HappinessRating movie={props.movie} refreshMovie={props.refreshMovie} url={props.url}/>
        </div>
    )
}

export default MovieDisplay;