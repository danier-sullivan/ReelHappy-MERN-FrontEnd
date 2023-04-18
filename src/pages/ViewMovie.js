import React from "react"
import {useState, useEffect} from "react"
import {Navigate, useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import MovieDisplay from "../components/MovieDisplay"
import CommentDisplay from "../components/CommentDisplay"

const ViewMovie=({movies})=>{
    
    const params=useParams();
    const title=params.title
    const showUrl=process.env.REACT_APP_BASE_URL+title
    const [movie, setMovie]=useState(movies.find((movie)=>movie.title===title))
    const refreshMovie=async()=>{
        if (title!==undefined){
            const response= await fetch(showUrl)
            const data=await response.json();
            setMovie(data);
        }
    }
    useEffect(()=>{
        refreshMovie()
    },[title])

    const loaded=()=>{
        return(
            <>
                <MovieDisplay movie={movie} refreshMovie={refreshMovie} url={showUrl}/>
                <CommentDisplay movie={movie} refreshMovie={refreshMovie} url={showUrl}/>
            </>
            )}
    const loading=()=>{
        return <h1>Loading...</h1>
    }
    return movies ? (movie ? loaded() : loading()): loading()
}

export default ViewMovie;

