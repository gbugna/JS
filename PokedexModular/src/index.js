import { traerPokemonIndividual, traerPokemones } from './consultas.js';

const divMuestraPokemon = document.querySelector('#DivMuestraPokemon');


traerPokemones();
divMuestraPokemon.textContent = consulta;

