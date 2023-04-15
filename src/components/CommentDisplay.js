import React from 'react'
import {useEffect, useState} from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const CommentDisplay=(props)=>{
    
    return(
        <div className="commentDisplay">
        <CommentForm movie={props.movie} refreshMovie={props.refreshMovie} URL={props.URL}/>
        {props.movie.comments.map((comment)=>{
            return <Comment key={comment._id}  movie={props.movie} refreshMovie={props.refreshMovie} comment={comment} URL={props.URL}/>
        })}
    </div>)
}

export default CommentDisplay;