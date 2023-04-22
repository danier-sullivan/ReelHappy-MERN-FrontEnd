
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
      const response = await fetch(`${props.url}${searchTerm}`);
      console.log(`props.url${searchTerm}`)
      
      const data = await response.json();
      console.log(data)
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
    
  };
  useEffect(() => {
    if (movie) { 
      if (movie.title!==undefined){
    // let title=movie.title.replace(" ", "%20")
        if (location.pathname==='/'|| location.pathname==="/browse"){
          navigate(`/${movie.title}`,
            {state: {
              movies: [movie]
            },
            replace: false});
        }
        else {
          navigate(`./${movie.title}`,
            {state: {
              movies: [movie]
            },
            replace: false});
        }
      }}}, [movie]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="searchterm"
      onChange={handleChange}
      value={formData.searchterm}
      placeholder="Search by Title"
/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SearchBar