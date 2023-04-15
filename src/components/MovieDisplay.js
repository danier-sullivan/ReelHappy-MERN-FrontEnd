import React from 'react'
import HappinessRating from './HappinessRating';

const MovieDisplay=(props)=>{
    let avgHappiness=""
    if (props.movie.avgHappiness){
        avgHappiness=<div className= "happy">Average Happiness Rating: {props.movie.avgHappiness}</div>
    }
    else{
        avgHappiness=<h3>Movie has no scores yet! Be the first to rate it!</h3>
    }

    return(
        <div className = "showMovie">
            <h1>{props.movie.title}</h1>
            <img src={props.movie.img} alt={props.movie.title}/>
            <h3>{props.movie.year}</h3>
            <h3>{props.movie.genre}</h3>
            <h3>{props.movie.rated}</h3>
            <h3>{avgHappiness}</h3>
            <HappinessRating movie={props.movie} refreshMovie={props.refreshMovie} url={props.url}/>
        </div>
    )
}

export default MovieDisplay;