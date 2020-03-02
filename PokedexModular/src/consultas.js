const linkAPI = 'https://pokeapi.co/api/v2/pokemon/';

export function traerPokemon(id) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then(respuesta => respuesta.json())
      .then(respuestaJSON => { 
        console.log(respuestaJSON) 
    
    }).catch(error => console.error("FALLÓ", error));
  }

  export function saludo(params) {
      console.log(params);
      
      
  }

  