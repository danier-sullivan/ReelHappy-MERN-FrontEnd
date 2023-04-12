import React from "react"

const Comment=(props)=>{
    
    return(
    <div key={props.comment._id} className="comment">
        <h1>{props.comment.name}</h1>
        <p>{props.comment.body}</p>
    </div>
    )
}

export default Comment;