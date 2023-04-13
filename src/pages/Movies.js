import React from 'react';
import { useState } from 'react-router-dom';

const Movies = ({data}) => {
  
  return (
      <div>
        <h1>This is where we keep the movies</h1>
        <ul>
          {data.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.img} alt={movie.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };





export default Movies;