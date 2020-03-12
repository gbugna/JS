export async function MostrarPokemon(response) {
  let pokemon = await response;
  console.log(pokemon.count);
}
