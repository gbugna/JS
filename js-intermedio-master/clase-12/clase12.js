
//fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//usa promesas
const encabezado = document.querySelector('h2');
const lista = document.querySelector('#lista');





fetch("https://api.exchangeratesapi.io/latest")
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {

    encabezado.textContent= respuestaJSON.base;

    Object.entries(respuestaJSON.rates).forEach(([moneda, valor]) => {
    
    let itemLista = document.createElement("li");
    itemLista.classList.add("list-group-item");
    lista.appendChild(itemLista);

    let values = document.createTextNode(moneda+valor);
       
    itemLista.appendChild(values);
      

    });
  })
  .catch(error => console.error("FALLÓ", error));

