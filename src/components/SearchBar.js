// imports useState hook
import { useState } from "react";

// functional comp SearchBar-takes data and handleSeardh as props,
// useState sets variables of searchTerm and filteredMovies, 
// setSearchTerm and setfilter are the functions that update the state of aformentioned variables
const SearchBar = ({ data, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  console.log(data)

  // handleChange function should be called when input field changes- event object gives it new search term, calls handleSearch with user input to get filtered results
  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    const results = handleSearch(newSearchTerm);
    setFilteredMovies(results);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
     
      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
  
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
