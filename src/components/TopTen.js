import React, { useState, useEffect } from 'react';

const TopTen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies/');
        const data = await response.json();
        setMovies(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Top 10/ Most Recent</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTen;