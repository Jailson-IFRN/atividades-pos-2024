import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React logo"
            className="react-logo"
          />
        </a>
      </div>
      <div className="navbar-right">
        <Link to="/search">
          <button className="btn">Buscador Pokémon</button>
        </Link>
        <a href="https://pokeapi.co/docs/v2" target="_blank" rel="noopener noreferrer">
          <button className="btn">API URL</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
