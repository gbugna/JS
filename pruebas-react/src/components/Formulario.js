import React, { useState } from "react";



const Formulario = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido:""
  })


  const handleInputChange = (event)=> {

    console.log(event.target);
    console.log(datos);
    
    setDatos({
      ...datos, 
      [event.target.name] : event.target.value
  
    })
    

  }

  return (
    <>
      <h1 className="text-4xl">Formulario</h1>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre">
        Nombre
      </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
           <label className="block text-gray-700 text-sm font-bold mb-2" for="apellido">
        Apellido      </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="apellido"
            onChange={handleInputChange}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enviar
          </button>
        </form>
        <h2>{datos.nombre} - {datos.apellido}</h2>
      </div>
    </>
  );
};

export default Formulario;

