import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
const NavBar = (props) => {
    return(
        <div className='nav'>
            <Link to="/"><div>HOME</div></Link>
            <Link to="/browse"><div>BROWSE</div></Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar