const BASE_URL = "https://rickandmortyapi.com/api";

export async function obtenerPersonajes(pagina = 1) {
  const res = await fetch(`${BASE_URL}/character?page=${pagina}`);
  const data = await res.json();
  return data;
}

export async function getPersonaje(id) {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  const data = await res.json();
  return data;
}



const API_URL = import.meta.env.VITE_API_URL ;
export const obtenerPersonajesVite = async () => {
  const res= await fetch(API_URL);
  const data = await res.json();



  return data;
}

