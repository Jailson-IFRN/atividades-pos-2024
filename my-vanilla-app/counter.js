export async function buscarPokemon(element) {
  try {
    document.getElementById('search-button').addEventListener('click', async () => {
      const pokemonName = document.getElementById('pokemon-input').value.trim().toLowerCase();
      const pokemonCard = document.getElementById('pokemon-card');
      const pokemonImage = document.getElementById('pokemon-image');
      const pokemonNameDisplay = element;
      const pokemonDescription = document.getElementById('pokemon-description');

      if (!pokemonName) {
        alert('Por favor, digite o nome de um Pokémon.');
        return;
      }

      try {
        // Buscar dados do Pokémon na PokeAPI
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error('Pokémon não encontrado.');
        }
        const pokemonData = await response.json();

        // Exibir o nome e imagem do Pokémon
        pokemonNameDisplay.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
        pokemonImage.src = pokemonData.sprites.other['official-artwork'].front_default || pokemonData.sprites.front_default;
        pokemonCard.style.display = 'block';

        // Buscar descrição do Pokémon em sua espécie
        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData = await speciesResponse.json();

        // Exibir a descrição (em português, se disponível)
        const descriptionEntry = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'pt' || entry.language.name === 'en'
        );
        pokemonDescription.textContent = descriptionEntry ? descriptionEntry.flavor_text.replace(/\n|\f/g, ' ') : 'Descrição não disponível.';

      } catch (error) {
        alert(error.message || 'Erro ao buscar os dados do Pokémon.');
        pokemonCard.style.display = 'none';
      }
    });
  } catch (error) {
    console.error('Erro ao configurar a busca de Pokémon:', error);
  }
}

