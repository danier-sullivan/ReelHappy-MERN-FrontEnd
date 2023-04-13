import React from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const apiKey = process.env._API_KEY;
  const params = useParams();
  const url = 'http://localhost:4000/movies';
  const [movies, setMovies] = React.useState(null);

  console.log("cactus")

  const getMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data);
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>This is where we keep the movies</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.img} alt={movie.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return movies ? loaded() : loading();
};

export default Movies;