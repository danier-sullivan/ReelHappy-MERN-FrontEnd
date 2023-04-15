import React from 'react'
import {useEffect, useState} from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const CommentDisplay=(props)=>{
    
    return(
        <div className="commentDisplay">
            <CommentForm movie={props.movie} refreshMovie={props.refreshMovie} url={props.url}/>
            {props.movie.comments.map((comment)=>{
                return (<div>
                    <Comment key={comment._id}  id={comment._id} movie={props.movie} refreshMovie={props.refreshMovie} comment={comment} url={props.url}/>
                </div>)})}
        </div>)    
}


export default CommentDisplay;