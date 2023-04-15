import React from 'react';
import { useState } from 'react-router-dom';

const Movies = ({data}) => {
  
  return (
      <div class="showAll">
        <h2>Movie Collection</h2>
        <ul>
          {data.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.img} alt={movie.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };





export default Movies;