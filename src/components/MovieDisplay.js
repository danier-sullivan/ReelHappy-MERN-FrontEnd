import React from 'react'

const MovieDisplay=({movie})=>{
    
    return(
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title}/>
            <h2>{movie.years}</h2>
            <h2>{movie.genres}</h2>
        </div>
    )
}

export default MovieDisplay;