import React, { useEffect, useState } from 'react';
import App from '../App.js';
import {Link} from "react-router-dom"

const TopTen = ({ data }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sortedData = data
      .filter(movie => movie.avgHappiness !== undefined)
      .sort((a, b) => b.avgHappiness - a.avgHappiness);
    setMovies(sortedData.slice(0, 10));
  }, [data]);
  
  return (
    <div className="columns">
      <h2>Top 10 Movies!</h2>
      <ul>
        <article className="card">
          {movies.map(movie => (
            <li key={movie._id}>
              <h3>{movie.title}</h3>
              <Link to={`/${movie.title}`}>
                <div className="toptenimage">
                  <img src={movie.img} alt={movie.title} />
                </div>
              </Link>
            </li>
          ))}
        </article>
      </ul>
    </div>
  );
};

export default TopTen;