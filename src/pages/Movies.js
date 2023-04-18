import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ data }) => {
  return (
    <div class="showAll">
      <h2>Movie Collection</h2>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <Link to={`/${movie.title}`}>
              <img src={movie.img} alt={movie.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

//comment for sake of commit