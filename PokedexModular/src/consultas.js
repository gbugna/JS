const linkAPI = 'https://pokeapi.co/api/v2/pokemon/';

export function traerPokemonIndividual(id) {
  return fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then(respuesta => respuesta.json())
      .then(respuestaJSON => { 
        console.log(respuestaJSON) 
    
    }).catch(error => console.error("FALLÓ", error));
  }

  export function traerPokemones() {
    return fetch(linkAPI)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => { 


     Object.keys(respuestaJSON).forEach( item => {

     console.log(respuestaJSON.name);
      

     });
      
  
  }).catch(error => console.error("FALLÓ", error));
      
      
  }

  