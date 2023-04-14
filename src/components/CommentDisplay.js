import React from 'react'
import {useEffect, useState} from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const CommentDisplay=(props)=>{
    
    return(
        <>
        <CommentForm movie={props.movie} refreshMovie={props.refreshMovie} URL={props.url}/>
        {props.movie.comments.map((comment)=>{
            return <Comment key={comment._id}  comment={comment}/>
        })}
    </>)
}

export default CommentDisplay;