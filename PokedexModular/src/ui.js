import { getPokemonData } from "./consultas.js";

export async function createHomePage(response) {
  let pokemon = await response;
  createNextPage(pokemon.next);
  createPokemonMosaic(pokemon.results);
}

function createNextPage(link) {
  console.log(link);
}

function createPokemonMosaic(pokemonMosaicList) {
  const $divInicio = document.querySelector("#pokemonMosaicDiv");

  for (const key in pokemonMosaicList) {
    if (pokemonMosaicList.hasOwnProperty(key)) {
      const pokemon = pokemonMosaicList[key];

      let divPokemon = document.createElement("div");
      let etiquetaPokemon = document.createElement("label");
      let nombrePokemon = document.createTextNode(pokemon.name);
      etiquetaPokemon.appendChild(nombrePokemon);
      divPokemon.appendChild(etiquetaPokemon);
      divPokemon.classList.add(pokemon.name, "divPokemon");
      $divInicio.appendChild(divPokemon);

      createPokemonSpecs(getPokemonData(pokemon.url));
    }
  }
}

async function createPokemonSpecs(obj) {
  let pokemonSpecs = await obj;
  let divPokemonSpecs = document.querySelector("." + pokemonSpecs.name);
  //(pokemonSpecs.sprites.back_default);
  let $pokemonImage = document.createElement("img");
  $pokemonImage.classList.add("pokemonImage");
  $pokemonImage.src = pokemonSpecs.sprites.back_default;
  let $pokemonHeightLabel = document.createElement("label");
  let pokemonHeight = document.createTextNode("Height: " + pokemonSpecs.height);
  $pokemonHeightLabel.appendChild(pokemonHeight);
  divPokemonSpecs.appendChild($pokemonImage);
  divPokemonSpecs.appendChild($pokemonHeightLabel);
}
