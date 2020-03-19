import { traerPokemones } from "./consultas.js";

export async function generarPokemones(response) {
  let pokemon = await response;
  mostrarNextPage(pokemon.next);
  mostrarPokemones(pokemon.results);
}

function mostrarNextPage(link) {
  console.log(link);
}

function mostrarPokemones(listaPokemones) {
  const $divInicio = document.querySelector("#DivMuestraPokemon");

  //console.log(listaPokemones);

  for (const key in listaPokemones) {
    if (listaPokemones.hasOwnProperty(key)) {
      const pokemon = listaPokemones[key];

      var divPokemon = document.createElement("div");
      let etiquetaPokemon = document.createElement("label");
      let nombrePokemon = document.createTextNode(pokemon.name);
      etiquetaPokemon.appendChild(nombrePokemon);
      divPokemon.appendChild(etiquetaPokemon);
      divPokemon.classList.add("divPokemon");
      $divInicio.appendChild(divPokemon);

      mostrarDetallesPokemon(traerPokemones(pokemon.url));
    }
  }
}

async function mostrarDetallesPokemon(obj) {
  let detallePokemon = await obj;
  let $pokemonHeightLabel = document.createElement("label");
  let $pokemonHeight = document.createTextNode(detallePokemon.height);
  $pokemonHeightLabel.appendChild($pokemonHeight);
  divPokemon.appendChild($pokemonHeightLabel);
}
