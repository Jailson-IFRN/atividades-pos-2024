import React, { useEffect, useState } from 'react';
import { api } from './api/apiWrapper.js';

export default function App() {
  const [artistas, setArtistas] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [musicas, setMusicas] = useState([]);

  const [novoArtista, setNovoArtista] = useState({ nome: '' });
  const [novoAlbum, setNovoAlbum] = useState({ nome: '', ano: '', artista: '' });
  const [novaMusica, setNovaMusica] = useState({ nome: '', segundos: '', album: '' });

  useEffect(() => {
    // Carregar dados iniciais do backend
    api.getArtistas().then(setArtistas);
    api.getAlbuns().then(setAlbuns);
    api.getMusicas().then(setMusicas);
  }, []);

  // Handlers para criar entidades
  const handleCreateArtista = () => {
    api.createArtista(novoArtista).then(() => {
      api.getArtistas().then(setArtistas);
      setNovoArtista({ nome: '' });
    }).catch(err => console.error(err));
  };

  const handleCreateAlbum = () => {
    api.createAlbum(novoAlbum).then(() => {
      api.getAlbuns().then(setAlbuns);
      setNovoAlbum({ nome: '', ano: '', artista: '' });
    }).catch(err => console.error(err));
  };

  const handleCreateMusica = () => {
    api.createMusica(novaMusica).then(() => {
      api.getMusicas().then(setMusicas);
      setNovaMusica({ nome: '', segundos: '', album: '' });
    }).catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Gestão de Música</h1>

      {/* Lista e CRUD de Artistas */}
      <section>
        <h2>Artistas</h2>
        <ul>
          {artistas.map(artista => (
            <li key={artista.id}>{artista.nome}</li>
          ))}
        </ul>
        <div>
          <h3>Criar Novo Artista</h3>
          <input
            type="text"
            placeholder="Nome do Artista"
            value={novoArtista.nome}
            onChange={e => setNovoArtista({ ...novoArtista, nome: e.target.value })}
          />
          <button onClick={handleCreateArtista}>Criar Artista</button>
        </div>
      </section>

      {/* Lista e CRUD de Álbuns */}
      <section>
        <h2>Álbuns</h2>
        <ul>
          {albuns.map(album => (
            <li key={album.id}>{album.nome} - {album.ano}</li>
          ))}
        </ul>
        <div>
          <h3>Criar Novo Álbum</h3>
          <input
            type="text"
            placeholder="Nome do Álbum"
            value={novoAlbum.nome}
            onChange={e => setNovoAlbum({ ...novoAlbum, nome: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ano de Lançamento"
            value={novoAlbum.ano}
            onChange={e => setNovoAlbum({ ...novoAlbum, ano: e.target.value })}
          />
          <select
            value={novoAlbum.artista}
            onChange={e => setNovoAlbum({ ...novoAlbum, artista: e.target.value })}
          >
            <option value="">Selecione um Artista</option>
            {artistas.map(artista => (
              <option key={artista.id} value={artista.id}>
                {artista.nome}
              </option>
            ))}
          </select>
          <button onClick={handleCreateAlbum}>Criar Álbum</button>
        </div>
      </section>

      {/* Lista e CRUD de Músicas */}
      <section>
        <h2>Músicas</h2>
        <ul>
          {musicas.map(musica => (
            <li key={musica.id}>{musica.nome} - {musica.segundos}s</li>
          ))}
        </ul>
        <div>
          <h3>Criar Nova Música</h3>
          <input
            type="text"
            placeholder="Nome da Música"
            value={novaMusica.nome}
            onChange={e => setNovaMusica({ ...novaMusica, nome: e.target.value })}
          />
          <input
            type="number"
            placeholder="Duração em Segundos"
            value={novaMusica.segundos}
            onChange={e => setNovaMusica({ ...novaMusica, segundos: e.target.value })}
          />
          <select
            value={novaMusica.album}
            onChange={e => setNovaMusica({ ...novaMusica, album: e.target.value })}
          >
            <option value="">Selecione um Álbum</option>
            {albuns.map(album => (
              <option key={album.id} value={album.id}>
                {album.nome}
              </option>
            ))}
          </select>
          <button onClick={handleCreateMusica}>Criar Música</button>
        </div>
      </section>
    </div>
  );
}
