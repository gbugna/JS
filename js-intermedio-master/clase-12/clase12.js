
//fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//usa promesas
fetch("https://api.exchangeratesapi.io/latest")
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {

    console.log(respuestaJSON.base);
    
    Object.keys(respuestaJSON.rates).forEach(moneda => {

      document.createElement(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`);
      

    });
  })
  .catch(error => console.error("FALLÓ", error));

