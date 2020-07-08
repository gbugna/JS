MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    proceso();
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
})



function proceso() {

if (!btnValidar) {
  


  let btnValidar = document.querySelector("#frm_formulario_header_demandaDocumentalForm\\:cbValidarDemandaDocumental");
  let btnValidarFinal = document.querySelector("#formModal_accionDemandaDocumentalModal\\:btnGuardar_accionDemandaDocumentalModal");
  //btnValidar.style.backgroundColor = "green";
  let btnRechazar = document.querySelector("#frm_formulario_header_demandaDocumentalForm\\:cbRechazarDemandaDocumental");
  btnRechazar.style.backgroundColor = "red";
  let encabezado = document.querySelector(
    "#frm_formulario_header_demandaDocumentalForm\\:div_formulario_header_superior_demandaDocumentalForm");
  let tabEntornoFuncional = document.querySelector(
    "#tabEntornoFuncional_lbl");
  
  tabEntornoFuncional.click();
  
  setTimeout(() => {
    let divProveedor = document.createElement("DIV");
    let divNumeroTrabajo = document.createElement("DIV");
    let botonNroProveedor = document.createElement("button");
    botonNroProveedor.innerHTML = "Copiar Proveedor";
    encabezado.append(divProveedor, divNumeroTrabajo);
    divProveedor.appendChild(botonNroProveedor);
    let numeroProveedor = document
      .querySelector(
        "#frm_formulario_header_demandaDocumentalForm\\:j_id225"
      )
      .text.split("|");
    divProveedor.textContent = numeroProveedor[0];
    let numeroTrabajo = document.querySelector(
      "#formEntornoFuncional\\:dtEntornoFuncional\\:0\\:colTrabajo"
    );
    let numeroTrabajoSplit = numeroTrabajo.textContent.split("|");
    divNumeroTrabajo.textContent = numeroTrabajoSplit[0];
  }, 3000);
  
  }
}