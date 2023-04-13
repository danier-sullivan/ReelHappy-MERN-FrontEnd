import React from 'react'
import {useEffect, useState} from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const CommentDisplay=({movie})=>{
    const [comments, setComments]=useState([])

    const fetchComments=async()=>{
        const response= await fetch(`http://localhost:4000/movies/${movie.title}`)
        const data=await response.json();
        setComments(data.comments);
        console.log("I'm here")
    }
    useEffect(() => {
        fetchComments()
        setComments(movie.comments)
    },[])

    console.log(comments)
    return(
        <>
        <CommentForm movie={movie} fetchComments={fetchComments}/>
        {comments.map((comment)=>{
            return <Comment key={comment._id}  comment={comment}/>
        })}
    </>)
}

export default CommentDisplay;