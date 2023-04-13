import React, { useState, useEffect } from 'react';
import App from '../App.js';
import {Link} from "react-router-dom"

const TopTen = ({movies}) => { 


  return (
    <div>
      <h2>Top 10/ Most Recent</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <Link to={`/${movie.title}`}><img src={movie.img} alt={movie.title} /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
        };

export default TopTen;