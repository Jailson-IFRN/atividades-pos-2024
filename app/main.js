import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
      <div class="container mt-5">
      <h1 class="text-center mb-4">Pesquisador Pokémon</h1>

      <div class="mb-3">
          <input type="text" id="pokemon-input" class="form-control" placeholder="Digite o nome do Pokémon">
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
          <button id="search-button" class="btn btn-primary btn-lg">Buscar Pokémon</button>
      </div>


      <div class="card mt-4" id="pokemon-card" style="display: none;">
          <img src="" class="card-img-top" id="pokemon-image" alt="Imagem do Pokémon">
          <div class="card-body">
              <h5 class="card-title" id="pokemon-name"></h5>
              <p class="card-text" id="pokemon-description"></p>
          </div>
      </div>
      </div>
`

setupCounter(document.querySelector('#counter'))
