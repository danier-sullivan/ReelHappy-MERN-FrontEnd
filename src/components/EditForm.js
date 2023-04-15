import React from "react"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"


const EditForm=(props)=>{

const [newForm, setNewForm] = useState({
    name: props.name,
    body: props.body,
    
  });

  
// const [comments, setComments]=useState([])
const URL = `http://localhost:4000/movies/${props.movie.title}/comments/${props.commentId}/edit`;

const updateComment = async (comment) => {
    await fetch(URL, {
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
    updateComment(newForm);
    setNewForm({
      name: props.name,
      body: props.body,
    });
    props.setEditing(false)
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
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default EditForm;