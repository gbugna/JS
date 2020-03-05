import { traerPokemonIndividual, traerPokemones } from './consultas.js';

const divMuestraPokemon = document.querySelector('#DivMuestraPokemon');


consulta = traerPokemones();
divMuestraPokemon.textContent = consulta;

