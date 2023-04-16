
import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import MovieDisplay from "../components/MovieDisplay"
import CommentDisplay from "../components/CommentDisplay"

const ViewMovie=({movies})=>{
    
    const params=useParams();
    const title=params.title
    const showUrl=process.env.REACT_APP_BASE_URL+title
    console.log(showUrl)
    const [movie, setMovie]=useState(movies.find((foundMovie) => foundMovie.title === title))
    const refreshMovie=async()=>{
        const response= await fetch(showUrl)
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
                <MovieDisplay movie={movie} refreshMovie={refreshMovie} url={showUrl}/>
                <CommentDisplay movie={movie} refreshMovie={refreshMovie} url={showUrl}/>
            </>
            )}
    const loading=()=>{
        return <h1>Loading...</h1>
    }
    return movies ? (movie ? loaded() : loading()) : loading();
}

export default ViewMovie;