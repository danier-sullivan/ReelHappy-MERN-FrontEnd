import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Movies from './pages/Movies'
import TopTen from './components/TopTen'
import ViewMovie from './pages/ViewMovie'


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import "./App.css"


const  App = () => {
  const URL = process.env.REACT_APP_BASE_URL
  const [movies, setMovies] = useState([]);
  const [movie, setMovie]=useState(null)
  console.log(URL)



    const fetchMovies = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchMovies();
  }, []);

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar url={URL}/>
          {/* <TopTen data={movies}/> */}
          <Routes>
            {/* path = url, element = what page for that url */}
            <Route path="/" element={<Home data={movies} url={URL}/>}/>
            <Route path='/:title' element={<ViewMovie movies={movies} url={URL}/>}/>
            <Route path='/Browse' element={<Movies data={movies} url={URL}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;