import React, { useState } from "react";

const HappinessRating = ({ onRate }) => {
  const [rating, setRating] = useState(null);

  const handleClick = (value) => {
    setRating(value);
 
  };

  const emojis = [
    { value: 1, symbol: "😿 " },
    { value: 2, symbol: "😾" },
    { value: 3, symbol: "😼" },
    { value: 4, symbol: "😺" },
    { value: 5, symbol: "😻" },
  ];

  return (
    <div className="rating-container">
      <div className="emoji">
        {emojis.map((emoji) => (
          <button
            key={emoji.value}
            onClick={() => handleClick(emoji.value)}
            className={`emoji-button ${emoji.value === rating ? "selected" : ""}`}
          >
            {emoji.symbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HappinessRating;


//func comp =HappinessRating, currently takes prop onRate- called whenever user rates movie

//state variable= rating- initialized to null- set rating func updates rating value

// handle click takes value param?- gets called when user clicks 

// emoji.value === etc = ternary op. makes sure value matches rating- if not, returns empty string?


//post request on this end?  prop drilling so we aren't calling API directly when user rates and adds a movie to database?

