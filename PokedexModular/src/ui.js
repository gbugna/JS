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

  for (const key in listaPokemones) {
    if (listaPokemones.hasOwnProperty(key)) {
      const pokemon = listaPokemones[key];

      let divPokemon = document.createElement("div");
      let etiquetaPokemon = document.createElement("label");
      let nombrePokemon = document.createTextNode(pokemon.name);
      etiquetaPokemon.appendChild(nombrePokemon);
      divPokemon.appendChild(etiquetaPokemon);
      divPokemon.classList.add("divPokemon");
      $divInicio.appendChild(divPokemon);

      // mostrarDetallesPokemon(pokemon.url);
    }
  }
}

function mostrarDetallesPokemon(detallesPokemon) {
  for (const key in detallesPokemon) {
    if (detallesPokemon.hasOwnProperty(key)) {
      const datosPokemon = detallesPokemon[key];

      console.log(datosPokemon.height);
      console.log(datosPokemon.weight);
    }
  }
}
