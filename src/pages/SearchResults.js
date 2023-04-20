// import React, { useEffect, useState} from 'react';
// import {Link} from 'react-router-dom'

// const SearchResults=(props)=>{
//     const [movies, setMovies]=useState(null);
    
//     const getSearchResults=async(searchTerm)=>{
//         const response=await fetch(`http://localhost:4000/movies/api/${searchTerm}`)
//         const data=await response.json()
//         await setMovies(data)
//     }
//     useEffect(()=>{
//         getSearchResults(props.searchTerm)
//     },[props.searchTerm])

//     const loaded=()=>{
//         return(
//             movies.map((movie)=>{
//                 return (
//                 <div key={movie.Title}>
//                     <Link to={`/${movie.Title}`}><img src={movie.Poster}/></Link>
//                 </div>)})
//             )
//     }
//     const loading=()=>{
//         return (<h3>Loading...</h3>)
//     }
//     return movies ? loaded() : loading()
// }

// export default SearchResults;