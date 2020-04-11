export const apiLink = "https://pokeapi.co/api/v2/pokemon/";
const nextLink = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

export async function getPokemonData(url) {
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}
