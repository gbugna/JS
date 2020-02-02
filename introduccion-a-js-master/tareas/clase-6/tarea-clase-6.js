/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector('#btnProceso').onclick = function empezarProceso() {

    const cantidadGrupoFamiliar = Number(prompt("cuantos son en tu familia?"));

    const body = document.querySelector('#anexar');
    const divContenedor = document.createElement('div');
    body.appendChild(divContenedor);


    for (let i = 1; i < cantidadGrupoFamiliar+1 ; i++) {

        let input = document.createElement('input');
        let label = document.createElement('label');
        let br = document.createElement('br');
        input.setAttribute("type", "number");
        input.setAttribute("id", i);
        divContenedor.appendChild(label);
        labelText = document.createTextNode('ingrese edad de familiar N° '+ i);
        label.appendChild(labelText);
        divContenedor.appendChild(input);
        divContenedor.appendChild(br);
    }

}

    

function realizarCalculo() {

    const edades = document.querySelectorAll('input');
    let edadesArray = [];
    
    for (let i = 0; i < edades.length; i++) {

        edadesArray.push(Number(edades[i].value));

    }

    let totalEdades = 0;
    for (let i=0; i < edadesArray.length;i++) {

        totalEdades += edadesArray[i];
           
    }


    function edadMaxima() {
     let edadMaxima = Math.max.apply(Math, edadesArray);
     return edadMaxima; 
    }
    
    function edadMinima() {
        
    return edadMinima =  Math.min.apply(Math, edadesArray);

}
    const divEdadMaxima = document.querySelector('#edadMaxima');
    divEdadMaxima.innerHTML = edadMaxima;
}








/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
