//fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//usa promesas
const encabezado = document.querySelector("h2");
const lista = document.querySelector("#lista");
const datePicker = document.querySelector("#datePicker");

let consultaDefault = "https://api.exchangeratesapi.io/latest";

consultarDivisas(consultaDefault);

datePicker.addEventListener("change", event => {
 
  limpiarLista();
  
  let fecha = event.target.value;
  consultarDivisas("https://api.exchangeratesapi.io/" + fecha);
});

function consultarDivisas(consulta) {
  fetch(consulta)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      encabezado.textContent = respuestaJSON.base;

      Object.entries(respuestaJSON.rates).forEach(([moneda, valor]) => {
        let itemLista = document.createElement("li");
        //itemLista.classList.add("list-group-item");
       // itemLista.classList.add("list-group-flush");
        lista.appendChild(itemLista);

        let values = document.createTextNode(moneda + valor);

        itemLista.appendChild(values);
      });

      
      

    })
    .catch(error => console.error("FALLÓ", error));
}


function limpiarLista() {

  if (lista.childNodes.length > 0 ) {
    
    lista.innerHTML="";
  }
  
}