// import React, { useEffect, useState } from 'react';
// import App from '../App.js';
// import {Link} from "react-router-dom"

// const TopTen = ({ data }) => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     const sortedData = data.sort(
//       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//     );
//     setMovies(sortedData.slice(0, 10));
//   }, [data]);
//   return (
//     <div className="columns">
//       <h2>Top 10 Movies!</h2>
//       <ul>
//         <article className="card">{movies.map(movie => (
//           <li key={movie._id}>
//             <h3>{movie.title}</h3>
//             <Link to={`/${movie.title}`}><img src={movie.img} alt={movie.title} /></Link>
//           </li>
//         ))}
//         </article>
//         </ul>
//     </div>
//   );
// };
// export default TopTen;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopTen = ({ data }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const sortedData = data.sort(
      (a, b) => b.avgHappiness - a.avgHappiness
    );
    console.log(sortedData.map(movie => movie.avgHappiness));
    setMovies(sortedData.slice(0, 10));
  }, [data]);

  return (
    <div className="columns">
      <h2>Top 10 Movies by Average Happiness Score</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <Link to={`/${movie.title}`}>
              <img src={movie.img} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTen;
