import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ data }) => {
  const movieItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  };

  return (
    <div className="showAll">
      <h2>Movie Collection</h2>
      <ul className="movieList">
        {data.map((movie) => (
          <li key={movie.id} style={movieItemStyle} className="movieItem">
            <Link to={`/${movie.title}`}>
              <div className="movieImages">
                <img src={movie.img} alt={movie.title} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;