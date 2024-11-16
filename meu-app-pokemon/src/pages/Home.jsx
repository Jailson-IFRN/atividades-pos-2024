import React from 'react';
import './Home.css';
import pokemonImage from '../assets/pokemon.png';  

const Home = () => {
  return (
    <div className="home-container">
      <div className="rayquaza-3d">
        <img src={pokemonImage} alt="Rayquaza" />
      </div>
    </div>
  );
};

export default Home;
