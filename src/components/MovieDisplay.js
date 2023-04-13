import React from 'react'

const MovieDisplay=({movie})=>{
    
    return(
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title}/>
            <h2>{movie.year}</h2>
            <h2>{movie.genre}</h2>
        </div>
    )
}

export default MovieDisplay;