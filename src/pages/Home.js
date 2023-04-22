
import React from 'react';
import Carousel from '../components/Carousel';

function Home({ data }) {
  const topTenImages = data
    .filter(movie => movie.avgHappiness !== undefined)
    .sort((a, b) => b.avgHappiness - a.avgHappiness)
    .slice(0, 10)
    .map(movie => movie.img);

  return (
    <div className="topHappy">
      <h1>Reel-y Happy Movies!</h1>
    <div>
    <div className="carousel">
      <Carousel images={topTenImages} />
      </div>
    </div>
  </div>
  );
}

export default Home;