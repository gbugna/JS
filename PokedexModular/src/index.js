import {
  traerPokemonIndividual,
  traerPokemones,
  linkAPI,
  nextLink
} from "./consultas.js";

import { generarPokemones } from "./ui.js";

const divMuestraPokemon = document.querySelector("#DivMuestraPokemon");

generarPokemones(traerPokemones(linkAPI));
