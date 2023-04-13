
import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Movies from './pages/Movies'
import TopTen from './components/TopTen'
import ViewMovie from './pages/ViewMovie'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

const  App = () => {

  const [movies, setMovies] = useState([]);

  
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies/');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() =>{
    fetchMovies();
  }, []);
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* <TopTen data={movies}/> */}
          <Routes>
            {/* path = url, element = what page for that url */}
            <Route path="/" element={<Home data={movies}/>}/>
            <Route path='/:title' element={<ViewMovie movies={movies}/>}/>
            <Route path='/Browse' element={<Movies />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}


export default App;

//Is there a way to avoid wrapping in browser router?  

