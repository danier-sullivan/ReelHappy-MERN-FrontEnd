import React from 'react';
import App from '../App.js';
import Home from '../pages/Home.js';

const TopTen = ({data}) => { 


  return (
    <div>
      <h2>Top 10/ Most Recent</h2>
      <ul>
        {data.map(movie => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <img src={movie.img} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
        };

export default TopTen;