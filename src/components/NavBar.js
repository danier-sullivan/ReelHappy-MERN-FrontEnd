import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'

const NavBar = (props) => {

    return(
        <div className='nav'>
            <Link to="/"><button>HOME</button></Link>
            <Link to="/browse"><button>BROWSE</button></Link>
            <SearchBar url={props.url}/>
        </div>
    )
}

export default NavBar