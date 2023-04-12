import React from 'react'
import {useEffect, useState} from "react"

const CommentDisplay=({movie})=>{
    const [comments, setComments]=useState([])

    useEffect(() => {
        console.log(movie.comments)
         setComments(movie.comments)
    },[movie.comments])

    console.log(comments)
    return(<>
    <CommentForm movie={movie} setComments={setComments}/>
    
    {comments.map((comment)=>{
            return <Comment key={comment._id}  comment={comment}/>
       })}
    </>)
}

export default CommentDisplay;