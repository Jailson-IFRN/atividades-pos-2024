import React, { useEffect, useState } from 'react';
import { api } from './api/apiWrapper.js';

export default function ArtistaList() {
  const [artistas, setArtistas] = useState([]);
  const [novoArtista, setNovoArtista] = useState({ nome: '', local: '', ano_criacao: '' });
  const [editArtista, setEditArtista] = useState(null);

  // Carregar a lista de artistas
  useEffect(() => {
    api.getArtistas().then(setArtistas);
  }, []);

  // Criar novo artista
  const handleCreate = () => {
    api.createArtista(novoArtista).then(() => {
      api.getArtistas().then(setArtistas); // Recarrega os artistas
      setNovoArtista({ nome: '', local: '', ano_criacao: '' }); // Limpa o formulário
    });
  };

  // Iniciar edição
  const handleEdit = (artista) => {
    setEditArtista(artista); // Define o artista para edição
  };

  // Salvar edição
  const handleSaveEdit = () => {
    if (editArtista) {
      api.updateArtista(editArtista.id, editArtista).then(() => {
        api.getArtistas().then(setArtistas); // Recarrega os artistas
        setEditArtista(null); // Limpa o estado de edição
      });
    }
  };

  // Excluir artista
  const handleDelete = (id) => {
    api.deleteArtista(id).then(() => api.getArtistas().then(setArtistas));
  };

  return (
    <div>
      <h1>Artistas</h1>
      <ul>
        {artistas.map((artista) => (
          <li key={artista.id}>
            {artista.nome} - {artista.local} - {artista.ano_criacao}{' '}
            <button onClick={() => handleEdit(artista)}>Editar</button>{' '}
            <button onClick={() => handleDelete(artista.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      {editArtista ? (
        <div>
          <h2>Editar Artista</h2>
          <input
            type="text"
            placeholder="Nome"
            value={editArtista.nome}
            onChange={(e) => setEditArtista({ ...editArtista, nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="Local"
            value={editArtista.local}
            onChange={(e) => setEditArtista({ ...editArtista, local: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ano de Criação"
            value={editArtista.ano_criacao}
            onChange={(e) => setEditArtista({ ...editArtista, ano_criacao: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Salvar</button>
          <button onClick={() => setEditArtista(null)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <h2>Criar Novo Artista</h2>
          <input
            type="text"
            placeholder="Nome"
            value={novoArtista.nome}
            onChange={(e) => setNovoArtista({ ...novoArtista, nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="Local"
            value={novoArtista.local}
            onChange={(e) => setNovoArtista({ ...novoArtista, local: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ano de Criação"
            value={novoArtista.ano_criacao}
            onChange={(e) => setNovoArtista({ ...novoArtista, ano_criacao: e.target.value })}
          />
          <button onClick={handleCreate}>Criar</button>
        </div>
      )}
    </div>
  );
}
