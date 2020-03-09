import {
  traerPokemonIndividual,
  traerPokemones,
  linkAPI,
  nextLink
} from "./consultas.js";

import { MostrarPokemon } from "./ui.js";

const divMuestraPokemon = document.querySelector("#DivMuestraPokemon");

MostrarPokemon(traerPokemones("https://pokeapi.co/api/v2/pokemon/"));
