import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const EjemploUno = () => {
  const { register, errors, handleSubmit } = useForm();

  const [entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    setEntradas([...entradas, data]);
    e.target.reset();

    console.log(data);
  };

  return (
    <Fragment>
      <h1>Ejemplo Uno</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="titulo"
          placeholder="Ingrese Titulo"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register({
            required: { value: true, message: "campo obligatorio" },
            minLength: { value: 2, message: "Minimo 2 caracteres" },
          })}
        ></input>
        {errors.titulo && <span>{errors.titulo.message}</span>}

        <input
          name="descripcion"
          placeholder="Descripción"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register({
            required: { value: true, message: "campo obligatorio" },
            minLength: { value: 2, message: "Minimo 2 caracteres" },
          })}
        ></input>
        {errors.descripcion && <span>{errors.descripcion.message}</span>}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       >
          Agregar
        </button>
      </form>

      <ul>
        {entradas.map((item) => (
          <li key={item.titulo}>
            {item.titulo} - {item.descripcion}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default EjemploUno;
