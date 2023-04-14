import React from 'react'
import App from '../App.js';
const MovieDisplay=({movie})=>{
    
    return(
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title}/>
            <h3>{movie.year}</h3>
            <h3>{movie.rated}</h3>
            <h3>{movie.genre}</h3>

        </div>
    )
}

export default MovieDisplay;