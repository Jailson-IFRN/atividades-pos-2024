import React, { useEffect, useState } from 'react';
import { api } from './api/apiWrapper.js';

export default function AlbumList() {
  const [albuns, setAlbuns] = useState([]);
  const [novoAlbum, setNovoAlbum] = useState({ nome: '', ano: '', artista: '' });
  const [editAlbum, setEditAlbum] = useState(null);

  useEffect(() => {
    api.getAlbuns().then(setAlbuns);
  }, []);

  const handleCreate = () => {
    api.createAlbum(novoAlbum).then(() => {
      api.getAlbuns().then(setAlbuns);
      setNovoAlbum({ nome: '', ano: '', artista: '' });
    });
  };

  const handleEdit = (album) => {
    setEditAlbum(album);
  };

  const handleSaveEdit = () => {
    if (editAlbum) {
      api.updateAlbum(editAlbum.id, editAlbum).then(() => {
        api.getAlbuns().then(setAlbuns);
        setEditAlbum(null);
      });
    }
  };

  const handleDelete = (id) => {
    api.deleteAlbum(id).then(() => api.getAlbuns().then(setAlbuns));
  };

  return (
    <div>
      <h1>Álbuns</h1>
      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            {album.nome} - {album.ano}{' '}
            <button onClick={() => handleEdit(album)}>Editar</button>{' '}
            <button onClick={() => handleDelete(album.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {editAlbum ? (
        <div>
          <h2>Editar Álbum</h2>
          <input
            type="text"
            placeholder="Nome"
            value={editAlbum.nome}
            onChange={(e) => setEditAlbum({ ...editAlbum, nome: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ano"
            value={editAlbum.ano}
            onChange={(e) => setEditAlbum({ ...editAlbum, ano: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Salvar</button>
          <button onClick={() => setEditAlbum(null)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <h2>Criar Novo Álbum</h2>
          <input
            type="text"
            placeholder="Nome"
            value={novoAlbum.nome}
            onChange={(e) => setNovoAlbum({ ...novoAlbum, nome: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ano"
            value={novoAlbum.ano}
            onChange={(e) => setNovoAlbum({ ...novoAlbum, ano: e.target.value })}
          />
          <button onClick={handleCreate}>Criar</button>
        </div>
      )}
    </div>
  );
}
