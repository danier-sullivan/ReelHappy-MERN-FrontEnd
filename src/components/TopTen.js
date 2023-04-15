import React, { useEffect, useState } from 'react';
import App from '../App.js';
import {Link} from "react-router-dom"

const TopTen = ({ data}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sortedData = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setMovies(sortedData.slice(0, 10));
  }, [data]);

  return (
    <div classname="columns">
      <h2>Top 10 Movies!</h2>
          <article classname="card">{movies.map(movie => (
            <li key={movie._id}>
              <div classname= "movieTitle"><h3>{movie.title}</h3></div>
              <div classname= "movieLink"><Link to={`/${movie.title}`}><img src={movie.img} alt={movie.title} /></Link></div>
          </li>
        ))}
        </article>
    </div>
  );
};

export default TopTen;