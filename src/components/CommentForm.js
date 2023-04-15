import React from "react"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"


const CommentForm=(props)=>{

const [newForm, setNewForm] = useState({
    name: "",
    body: "",
    
  });

  
// const [comments, setComments]=useState([])
// const URL = `http://localhost:4000/movies/${props.movie.title}/comments`;

const createComment = async (comment) => {
    await fetch(props.url+`/comments`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    props.refreshMovie();
  };
  
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    createComment(newForm);
    setNewForm({
      name: "",
      body: "",
    });
    
  };

return (
    <div className="Comments">
      <form onSubmit={handleSubmit}>
      <label for = "Name">Share your Name</label>
        <div class="row">
          <div class="six columns">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newForm.name}
          placeholder="Commenter Name"
        /></div>
        </div>
        <label for = "Comment">Add Your Comment</label>
        <br></br>
        
        <textarea class="u-full-width" placeholder="Your Thoughts Here" id="exampleMessage"      
            name="body"
            onChange={handleChange}
            value={newForm.body}>
        </textarea>
            <br></br>  
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CommentForm;