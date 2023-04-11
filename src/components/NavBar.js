import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div className='nav'>
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