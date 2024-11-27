import React, { useEffect, useState } from 'react';
import { api } from './api/apiWrapper.js';

export default function ArtistaList() {
  const [artistas, setArtistas] = useState([]);
  const [novoArtista, setNovoArtista] = useState({ nome: '', local: '', ano_criacao: '' });
  const [erro, setErro] = useState(null);

  // Função auxiliar para carregar os artistas com tratamento de erros
  const carregarArtistas = () => {
    api.getArtistas()
      .then(setArtistas)
      .catch((err) => {
        console.error('Erro ao carregar artistas:', err);
        setErro('Não foi possível carregar a lista de artistas.');
      });
  };

  // Carregar a lista de artistas ao montar o componente
  useEffect(() => {
    carregarArtistas();
  }, []);

  // Criar novo artista
  const handleCreate = () => {
    api.createArtista(novoArtista)
      .then(() => {
        carregarArtistas(); // Recarrega os artistas
        setNovoArtista({ nome: '', local: '', ano_criacao: '' }); // Limpa o formulário
      })
      .catch((err) => {
        console.error('Erro ao criar artista:', err);
        setErro('Não foi possível criar o artista. Verifique os dados e tente novamente.');
      });
  };

  // Excluir artista
  const handleDelete = (id) => {
    api.deleteArtista(id)
      .then(() => carregarArtistas()) // Recarrega os artistas
      .catch((err) => {
        console.error(`Erro ao excluir artista com id ${id}:`, err);
        setErro('Não foi possível excluir o artista. Tente novamente.');
      });
  };

  return (
    <div>
      <h1>Artistas</h1>
    
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

     
      <ul>
        {artistas.map((artista) => (
          <li key={artista.id}>
            {artista.nome} - {artista.local} - {artista.ano_criacao}{' '}
            <button onClick={() => handleDelete(artista.id)}>Excluir</button>
          </li>
        ))}
      </ul>

     
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
  );
}
