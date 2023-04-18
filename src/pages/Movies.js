import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ data }) => {
  const movieListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const movieItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div class="showAll">
      <h2>Movie Collection</h2>
      <ul style={movieListStyle}>
        {data.map((movie) => (
          <li key={movie.id} style={movieItemStyle}>
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