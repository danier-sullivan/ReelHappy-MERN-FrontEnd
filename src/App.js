import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Movies from './pages/Movies';
import TopTen from './components/TopTen';
import ViewMovie from './pages/ViewMovie';
import SearchBar from './components/SearchBar';
// import ResultsDisplay from './components/ResultsDisplay';
import SearchResults from './pages/SearchResults'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import "./App.css"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:4000/movies/');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTitle = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:4000/movies/${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  // const handleSearch = (searchTerm) => {
  //   if (!searchTerm) {
  //     setFilteredMovies(movies);
  //   } else {
  //     const filteredMovies = movies.filter((movie) =>
  //       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredMovies(filteredMovies);
  //   }
  // };
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar fetchTitle={fetchTitle}/>
        {/* <TopTen data={movies}/> */}
        <Routes>
          {/* path = url, element = what page for that url */}
          <Route path="/" element={<Home data={movies}/>}/>
          <Route path='/:title' element={<ViewMovie movies={movies}/>}/>
          <Route path='/Browse' element={<Movies data={movies}/>} />
          <Route path='/search' element={<SearchResults />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;