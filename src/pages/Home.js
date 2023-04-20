

import React from 'react';
import Carousel from '../components/Carousel';

function Home({ data }) {
  const topTenImages = data
    .filter(movie => movie.avgHappiness !== undefined)
    .sort((a, b) => b.avgHappiness - a.avgHappiness)
    .slice(0, 10)
    .map(movie => movie.img);

  return (
    <div>
      <Carousel images={topTenImages} />
    </div>
  );
}

export default Home;