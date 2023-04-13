import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
const NavBar = (props) => {
    return(
        <div className='nav'>
            <h1>REEL Happy</h1>
            <Link to="/"><button>HOME</button></Link>
            <Link to="/browse"><button>BROWSE</button></Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar