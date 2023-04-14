import React, { useState, useEffect } from "react";

const HappinessRating = (props) => {
  const emojis = [
    { value: 1, symbol: "😿 " },
    { value: 2, symbol: "😾" },
    { value: 3, symbol: "😼" },
    { value: 4, symbol: "😺" },
    { value: 5, symbol: "😻" },
  ];
  const [rating, setRating] = useState(null);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    // Check if the user has already rated the movie
    const fetchRating = async () => {
      const response = await fetch(`${props.URL}/rating`);
      const data = await response.json();
      if (data.rating) {
        setRating(data.rating);
        setHasRated(true);
      }
    };
    fetchRating();
  }, []);

  const handleClick = (e) => {

    if (!hasRated) {
      addRating({ rating: e.target.value });
    }
  };

  const addRating = async (rating) => {
    await fetch(props.URL + "/rating", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rating),
    });
    setRating(rating.rating);
    setHasRated(true);
    props.refreshMovie();
  };

  return (
    <div className="rating-container">
      <div className="emoji">
        {emojis.map((emoji) => (
          <button
            key={emoji.value}
            onClick={handleClick}
            className={`emoji-button ${
              emoji.value === rating ? "selected" : ""
            }`}
            value={emoji.value}
            disabled={hasRated}
          >
            {emoji.symbol}
          </button>
        ))}
      </div>
      {rating && (
        <p className="rating-message">
          You rated {rating} out of 5. Thank you for your rating!
        </p>
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