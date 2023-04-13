import { useState, useEffect } from "react";

const TopTen = ({ data }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sortedData = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setMovies(sortedData.slice(0, 10));
  }, [data]);

  return (
    <div>
      <h2>Top 10/ Most Recent</h2>
      <ul>
        {movies.map((movie) => (
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