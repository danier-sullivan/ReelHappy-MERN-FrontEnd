
 

import React from 'react'
import { Link, redirect } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const SearchBar = (props) => {
  const navigate=useNavigate()
  let location=useLocation()
  const [movie, setMovie]=useState([])
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const fetchTitle= async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:4000/movies/${searchTerm}`);
      const data = await response.json();
      await setMovie(data)
    } 
    catch (error) {
      console.error(error);
    }
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchTitle(formData.searchterm);
    //console.log(movie)
    // if (movie){
    //   navigate(`/${movie.title}`, {
    //     state: {
    //         movies: [movie],
    //     }},)
    // }
    
  };
  useEffect(() => {
    console.log(movie)
    if (movie) { 
      console.log(location.pathname)
    // let title=movie.title.replace(" ", "%20")
    if (location.pathname==='/'|| location.pathname==="/browse"){
      navigate(`/${movie.title}`,
        {state: {
          movies: [movie]
         },
        replace: false});
    }
    else if (movie.title!==undefined) {
      navigate(`./${movie.title}`,
        {state: {
          movies: [movie]
        },
        replace: false});
    }
  }}, [movie]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SearchBar