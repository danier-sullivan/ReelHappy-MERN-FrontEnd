import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
const NavBar = (props) => {
    return(
        <div className='nav'>
            <SearchBar/>
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/browse">
                <div>BROWSE</div>
            </Link>
        
        </div>
    )
   
}

export default NavBar