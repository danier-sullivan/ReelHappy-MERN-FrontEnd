import React, { useState } from "react";

const HappinessRating = (props) => {
  const emojis = [
    { value: 1, symbol: "😿 " },
    { value: 2, symbol: "😾" },
    { value: 3, symbol: "😼" },
    { value: 4, symbol: "😺" },
    { value: 5, symbol: "😻" },
  ];
  const [rating, setRating] = useState(null);
  const [newForm, setNewForm]=useState({rating: undefined})

  const handleClick = (e) => {
    addRating({[e.target.name]: e.target.value})
  };

  const addRating=async (rating)=>{
    await fetch(props.URL+"/rating", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rating),
    });
    props.refreshMovie()
  }

  
  return (
    <div className="rating-container">
      <div className="emoji">
        {emojis.map((emoji) => (
          <button
            key={emoji.value}
            onClick={handleClick}
            className={`emoji-button ${emoji.value === rating ? "selected" : ""}`}
            value={emoji.value}
            name="rating"
          >
            {emoji.symbol}
          </button>
        ))}
      </div>
      {rating && (
        <p className="rating-message">Do we want a message that says you rated {rating} out of 5?</p>
      )}
    </div>
  );
};



export default HappinessRating;


//func comp =HappinessRating, currently takes prop onRate- called whenever user rates movie

//state variable= rating- initialized to null- set rating func updates rating value

// handle click takes value param?- gets called when user clicks 

// emoji.value === etc = ternary op. makes sure value matches rating- if not, returns empty string?


//post request on this end?  prop drilling so we aren't calling API directly when user rates and adds a movie to database?