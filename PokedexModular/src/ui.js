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
  const $divInicio = document.querySelector("#pokemon-mosaic-div");

  for (const key in pokemonMosaicList) {
    if (pokemonMosaicList.hasOwnProperty(key)) {
      const pokemon = pokemonMosaicList[key];

      let divPokemon = document.createElement("div");
      divPokemon.classList.add(pokemon.name, "div-pokemon");
      $divInicio.appendChild(divPokemon);

      createPokemonSpecs(getPokemonData(pokemon.url));
    }
  }
}

async function createPokemonSpecs(obj) {
  let pokemonSpecs = await obj;
  let divPokemonMain = document.querySelector("." + pokemonSpecs.name);
  let $divPokemonId = document.createElement("div");
  let $pokemonId = document.createElement("label");
  let $divPokemonImg = document.createElement("div");
  let $divPokemonSpecs = document.createElement("div");
  let $br = document.createElement("br");
  let $pokemonNameLabel = document.createElement("label");
  let $pokemonImage = document.createElement("img");
  let $pokemonHeightLabel = document.createElement("label");
  let $pokemonWeightLabel = document.createElement("label");
  $divPokemonId.classList.add(pokemonSpecs.types[0].type.name);
  $divPokemonSpecs.classList.add("div-pokemon-specs");
  $pokemonId.append("#", ("000" + pokemonSpecs.id).slice(-3));
  $pokemonId.classList.add("pokemon-label-id");
  $pokemonNameLabel.append(pokemonSpecs.name);
  $pokemonWeightLabel.append("Peso: " + pokemonSpecs.weight + "0 grs");
  $pokemonHeightLabel.append("Altura: " + pokemonSpecs.height + "0 cm");
  $pokemonNameLabel.classList.add("pokemon-name");
  $divPokemonImg.classList.add("div-pokemon-img");
  $pokemonImage.src = pokemonSpecs.sprites.back_default;
  $pokemonHeightLabel.classList.add("pokemon-height");
  divPokemonMain.append($divPokemonId, $divPokemonImg, $divPokemonSpecs);
  $divPokemonImg.appendChild($pokemonImage);
  $divPokemonSpecs.append(
    $pokemonNameLabel,
    $pokemonHeightLabel,
    $pokemonWeightLabel
  );
  console.log(pokemonSpecs.types[0].type.name);
  console.log(pokemonSpecs.types[1].type.name);
  console.log("---------------------------");
}
