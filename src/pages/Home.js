import React from 'react';
import TopTen from '../components/TopTen';
import HappinessRating from '../components/HappinessRating'

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <TopTen />
      <HappinessRating></HappinessRating>
    </div>
  );
};

export default Home;
