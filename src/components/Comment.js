import React from "react"
import {useState} from "react"

const Comment=(props)=>{
    const [editing, setEditing]=useState(false)
    const URL=props.URL
    console.log(props.URL)
    const handleDeleteOnClick=()=>{
        deleteComment(props.comment)
    }
    const deleteComment= async(comment)=>{
        await fetch(`${URL}/comments/${comment._id}/delete`, {
            method: "put"})
        props.refreshMovie()
    }

    return(
    <div key={props.comment._id} className="comment">
        <h1>{props.comment.name}</h1>
        <p>{props.comment.body}</p>
        <button onClick={handleDeleteOnClick}>Delete</button>
    </div>
    )
}

export default Comment;