import React from "react"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"


const EditForm=(props)=>{

const [newForm, setNewForm] = useState({
    name: props.name,
    body: props.body,
    
  });

  
// const [comments, setComments]=useState([])

const updateComment = async (comment) => {
    await fetch(props.url+`/comments/${props.commentId}/edit`, {
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
      <div className="Comments">
      <form onSubmit={handleSubmit}>
        <div className="commentTitle">
          <br></br>
          <label for = "Name">Update the Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newForm.name}
          placeholder="Update Name"
        />
        </div>
        
        <label for = "Comment">Update the Comment: </label>
        <br></br>

        <textarea class="full-width" placeholder="Update Comment" id="exampleMessage"
            name="body"
            onChange={handleChange}
            value={newForm.body}>
        </textarea>
        <br></br>
        <input type="submit" value="submit"/>
        <button>Cancel</button>
      </form>
      </div>
  );
};

export default EditForm