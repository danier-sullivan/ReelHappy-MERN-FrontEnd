import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
  return (
    <div className='searchBar'>
        <form>
          <input type="text" />
          <input type="submit" value="submit" />
        </form>

    </div>
  )

}

export default SearchBar