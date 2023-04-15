import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import MovieDisplay from "../components/MovieDisplay"
import CommentDisplay from "../components/CommentDisplay"
const ViewMovie = ({movies}) => {
    const params = useParams();
    const title = params.title;
    const url = `http://localhost:4000/movies/${title}`;
    const [movie, setMovie] = useState(null);
    const refreshMovie = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    };
    useEffect(() => {
      refreshMovie();
    }, []);
    const loaded = () => {
      console.log(movie);
      return (
        <>
          <MovieDisplay movie={movie} refreshMovie={refreshMovie} url={url} />
          <CommentDisplay movie={movie} refreshMovie={refreshMovie} url={url} />
        </>
      );
    };
    const loading = () => {
      return <h1>Loading...</h1>;
    };
    return movies ? (movie ? loaded() : loading()) : loading();
  };
  export default ViewMovie;









