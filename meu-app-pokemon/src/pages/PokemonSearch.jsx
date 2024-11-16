import React, { useState } from 'react';
import '../pages/PokemonSearch.css';

function PokemonSearch() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    if (!pokemon.trim()) {
      alert('Por favor, digite o nome de um Pokémon.');
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado.');
      }
      const data = await response.json();
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();
      const descriptionEntry = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === 'pt' || entry.language.name === 'en'
      );

      setPokemonData({
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
        description: descriptionEntry ? descriptionEntry.flavor_text.replace(/\n|\f/g, ' ') : 'Descrição não disponível.',
      });
      setError('');
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    }
  };

  return (
    <div className="search-container">
      <input 
        type="text"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
        placeholder="Digite o nome do Pokémon"
      />
      <button onClick={fetchPokemon}>Buscar Pokémon</button>
      {error && <p className="error">{error}</p>}
      {pokemonData && (
        <div className="card">
          <img src={pokemonData.image} alt={pokemonData.name} />
          <h2>{pokemonData.name}</h2>
          <p>{pokemonData.description}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;
