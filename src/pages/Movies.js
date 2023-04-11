import React from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const params = useParams();
  const url = 'localhost:4000';
  const [movies, setMovies] = React.useState(null);

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
    
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return movies ? loaded() : loading();
};


export default Movies;

