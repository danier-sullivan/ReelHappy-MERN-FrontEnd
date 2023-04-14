import React from "react"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"


const CommentForm=(props)=>{

const [newForm, setNewForm] = useState({
    name: "",
    body: "",
    
  });

  
// const [comments, setComments]=useState([])
const URL = `http://localhost:4000/movies/${props.movie.title}/comments`;

const createComment = async (comment) => {
    // make post request to create people
    await fetch(URL, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    //setComment(data.json())
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
    props.fetchComments();
  };

return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newForm.name}
        />
        <input
            type="textarea"
            name="body"
            onChange={handleChange}
            value={newForm.body}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CommentForm;