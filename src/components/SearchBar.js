import React from 'react'
import { Link } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const SearchBar = (props) => {
  const navigate=useNavigate()
  const [movie, setMovie]=useState([])
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const fetchTitle= async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:4000/movies/${searchTerm}`);
      const data = await response.json();
      await setMovie(data);
    } catch (error) {
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
    let title=movie.title.replace(" ", "%20")
     navigate(`/${movie.title}`, 
        {state: {
          movies: [movie],
        }});
    }}, [movie])
  // const getMovie= (searchterm)=>{
  //   props.fetchTitle(searchterm);
  // }
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