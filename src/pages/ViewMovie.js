import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import MovieDisplay from "../components/MovieDisplay"
import CommentDisplay from "../components/CommentDisplay"

const ViewMovie=({movies})=>{
    const params=useParams();
    const title=params.title
    const URL=`http://localhost:4000/movies/${title}`
    const [movie, setMovie]=useState(movies.find((foundMovie) => foundMovie.title === title))
    const refreshMovie=async()=>{
        const response= await fetch(URL)
        const data=await response.json();
        setMovie(data);
    }
    useEffect(()=>{
        refreshMovie()
    },[])

    const loaded=()=>{
        console.log(movie)
        return(
            <>
                <MovieDisplay movie={movie} refreshMovie={refreshMovie} URL={URL}/>
                <CommentDisplay movie={movie} refreshMovie={refreshMovie} URL={URL}/>
            </>
            )}
    const loading=()=>{
        return <h1>Loading...</h1>
    }
    return (movies ? loaded(): loading())
}

export default ViewMovie;