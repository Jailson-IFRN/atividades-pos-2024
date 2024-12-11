import React, { useEffect, useState } from 'react';
import { api } from './api/apiWrapper.js';

export default function App() {
  const [artistas, setArtistas] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [musicas, setMusicas] = useState([]);

  const [novoArtista, setNovoArtista] = useState({ nome: '', local:'', ano_criacao:'' });
  const [novoAlbum, setNovoAlbum] = useState({ nome: '', ano: '', artista: '' });
  const [novaMusica, setNovaMusica] = useState({ nome: '', segundos: '', album: '' });

  const [editandoArtista, setEditandoArtista] = useState(null);
  const [editandoAlbum, setEditandoAlbum] = useState(null);
  const [editandoMusica, setEditandoMusica] = useState(null);

  useEffect(() => {
    // trazer do banco do servic
    api.getArtistas().then(setArtistas);
    api.getAlbuns().then(setAlbuns);
    api.getMusicas().then(setMusicas);
  }, []);

  const handleCreateOrUpdateArtista = () => {
    if (editandoArtista) {
      api.updateArtista(editandoArtista.id, novoArtista).then(() => {
        api.getArtistas().then(setArtistas);
        setNovoArtista({ nome: '', local: '', ano_criacao: '' });
        setEditandoArtista(null);
      }).catch(err => console.error(err));
    } else {
      api.createArtista(novoArtista).then(() => {
        api.getArtistas().then(setArtistas);
        setNovoArtista({ nome: '', local: '', ano_criacao: '' });
      }).catch(err => console.error(err));
    }
  };
  const handleDeleteArtista = (id) => {
    api.deleteArtista(id).then(() => {
      api.getArtistas().then(setArtistas);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdateAlbum = () => {
    if (editandoAlbum) {
      api.updateAlbum(editandoAlbum.id, novoAlbum).then(() => {
        api.getAlbuns().then(setAlbuns);
        setNovoAlbum({ nome: '', ano: '', artista: '' });
        setEditandoAlbum(null);
      }).catch(err => console.error(err));
    } else {
      api.createAlbum(novoAlbum).then(() => {
        api.getAlbuns().then(setAlbuns);
        setNovoAlbum({ nome: '', ano: '', artista: '' });
      }).catch(err => console.error(err));
    }
  };
  const handleDeleteAlbum = (id) => {
    api.deleteAlbum(id).then(() => {
      api.getAlbuns().then(setAlbuns);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdateMusica = () => {
    if (editandoMusica) {
      api.updateMusica(editandoMusica.id, novaMusica).then(() => {
        api.getMusicas().then(setMusicas);
        setNovaMusica({ nome: '', segundos: '', album: '' });
        setEditandoMusica(null);
      }).catch(err => console.error(err));
    } else {
      api.createMusica(novaMusica).then(() => {
        api.getMusicas().then(setMusicas);
        setNovaMusica({ nome: '', segundos: '', album: '' });
      }).catch(err => console.error(err));
    }
  };
  const handleDeleteMusica = (id) => {
    api.deleteMusica(id).then(() => {
      api.getMusicas().then(setMusicas);
    }).catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Gestão de Música</h1>

    
      <section>
        <h2>Artistas</h2>
        <ul>
          {artistas.map(artista => (
            <li key={artista.id}>
              {artista.nome} - {artista.local} - {artista.ano_criacao}
              <button onClick={() => {
                setNovoArtista(artista);
                setEditandoArtista(artista);
              }}>Editar</button>
              <button onClick={() => handleDeleteArtista(artista.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>{editandoArtista ? 'Editar Artista' : 'Criar Novo Artista'}</h3>
          <input
            type="text"
            placeholder="Nome do Artista"
            value={novoArtista.nome}
            onChange={e => setNovoArtista({ ...novoArtista, nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="Local"
            value={novoArtista.local}
            onChange={e => setNovoArtista({ ...novoArtista, local: e.target.value })}
          />
          <input
            type="text"
            placeholder="Ano Criação"
            value={novoArtista.ano_criacao}
            onChange={e => setNovoArtista({ ...novoArtista, ano_criacao: e.target.value })}
          />
          <button onClick={handleCreateOrUpdateArtista}>{editandoArtista ? 'Salvar Alterações' : 'Criar Artista'}</button>
        </div>
      </section>

      
      <section>
        <h2>Álbuns</h2>
        <ul>
          {albuns.map(album => (
            <li key={album.id}>
              {album.nome} - {album.ano} - {album.artista}
              <button onClick={() => {
                setNovoAlbum(album);
                setEditandoAlbum(album);
              }}>Editar</button>
              <button onClick={() => handleDeleteAlbum(album.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>{editandoAlbum ? 'Editar Álbum' : 'Criar Novo Álbum'}</h3>
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
          <button onClick={handleCreateOrUpdateAlbum}>{editandoAlbum ? 'Salvar Alterações' : 'Criar Álbum'}</button>
        </div>
      </section>

      <section>
        <h2>Músicas</h2>
        <ul>
          {musicas.map(musica => (
            <li key={musica.id}>
              {musica.nome} - {musica.segundos}s
              <button onClick={() => {
                setNovaMusica(musica);
                setEditandoMusica(musica);
              }}>Editar</button>
              
              <button onClick={() => handleDeleteMusica(musica.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>{editandoMusica ? 'Editar Música' : 'Criar Nova Música'}</h3>
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
            <option value="">Selecione um Album</option>
            {albuns.map(albuns => (
              <option key={albuns.id} value={albuns.id}>
                {albuns.nome}
              </option>
            ))}
          </select>
          <button onClick={handleCreateOrUpdateMusica}>{editandoMusica ? 'Salvar Alterações' : 'Criar Música'}</button>
        </div>
      </section>
    </div>
  );
}
