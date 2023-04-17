import React, { useEffect } from "react"
import {useState} from "react"
import EditForm from "./EditForm"

const Comment=(props)=>{
    const [editing, setEditing]=useState(false)
    const url=props.url
    console.log(props.url)
    const handleDeleteOnClick=()=>{
        deleteComment(props.comment)
    }
    const handleEditOnClick=()=>{
        setEditing(!editing)
    }
    console.log(editing)
    useEffect(()=>{
        setEditing(false);
    }, [])

    const deleteComment= async(comment)=>{
        await fetch(`${url}/comments/${comment._id}/delete`, {
            method: "put"})
        props.refreshMovie()
    }
    
    return(
        <div>
        {/* {editing ?  */}
        {/* (<EditForm movie={props.movie} refreshMovie={props.refreshMovie} URL={props.URL} _id={props._id} setEditing={setEditing}/>) : */}
        <div key={props.comment._id} className="comment">
            <h1>{props.comment.name}</h1>
            <p>{props.comment.body}</p>
            <button onClick={handleDeleteOnClick}>Delete</button>
            <button onClick={handleEditOnClick}>Edit</button>
            {editing && <EditForm movie={props.movie} refreshMovie={props.refreshMovie} commentId={props.comment._id} setEditing={setEditing} name={props.comment.name} body={props.comment.body} url={props.url}/>}
        </div>
        </div>/*}*/
    )
}

export default Comment;