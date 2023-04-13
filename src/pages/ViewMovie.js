import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import MovieDisplay from "../components/MovieDisplay"
import CommentDisplay from "../components/CommentDisplay"

const ViewMovie=({movies})=>{
    const params=useParams();
    const title=params.title
    const loaded=()=>{
        
        console.log(movies)
        const movie=movies.find((movie) => movie.title === title);
        console.log(movie)
        return(
        <>
        <MovieDisplay movie={movie}/>
        <CommentDisplay movie={movie}/>
        </>
    )}
    const loading=()=>{
        return <h1>Loading...</h1>
    }
    return (movies ? loaded(): loading())
}

export default ViewMovie;