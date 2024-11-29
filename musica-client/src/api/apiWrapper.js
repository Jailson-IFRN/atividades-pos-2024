const BASE_URL = 'http://localhost:8000/api';


export const api = {
  // Artistas
  getArtistas: async () => 
    fetch(`${BASE_URL}/artistas/`)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao buscar artistas: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err; // Repassa o erro para o chamador lidar
      }),

  getArtista: async (id) => 
    fetch(`${BASE_URL}/artistas/${id}/`)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao buscar artista com id ${id}: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  createArtista: async (data) => 
    fetch(`${BASE_URL}/artistas/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao criar artista: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  updateArtista: async (id, data) => 
    fetch(`${BASE_URL}/artistas/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao atualizar artista com id ${id}: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  deleteArtista: async (id) => 
    fetch(`${BASE_URL}/artistas/${id}/`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao deletar artista com id ${id}: ${res.status}`);
        return res.text(); // Pode retornar texto vazio em respostas DELETE
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  // Albuns
  getAlbuns: async () =>
    fetch(`${BASE_URL}/albuns/`)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao buscar álbuns: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  createAlbum: async (data) =>
    fetch(`${BASE_URL}/albuns/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao criar álbum: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  deleteAlbum: async (id) =>
    fetch(`${BASE_URL}/albuns/${id}/`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao deletar álbum com id ${id}: ${res.status}`);
        return res.text();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  // Músicas
  getMusicas: async () =>
    fetch(`${BASE_URL}/musicas/`)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao buscar músicas: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  createMusica: async (data) =>
    fetch(`${BASE_URL}/musicas/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao criar música: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),

  deleteMusica: async (id) =>
    fetch(`${BASE_URL}/musicas/${id}/`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao deletar música com id ${id}: ${res.status}`);
        return res.text();
      })
      .catch(err => {
        console.error(err);
        throw err;
      }),
};
