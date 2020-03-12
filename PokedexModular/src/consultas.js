export const linkAPI = "https://pokeapi.co/api/v2/pokemon/";
export const nextLink = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

export function traerPokemonIndividual(id) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {})
    .catch(error => console.error("FALLÓ", error));
}

export async function traerPokemones(consulta) {
  const respuesta = await fetch(consulta);
  const json = await respuesta.json();
  return json;
}
