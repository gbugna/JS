import React, { useState } from "react";

const RecipeForm = (props) => {
  const initialStateValues = {
    recipeName: "",
    category: "",
    rating: "",
    method: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEditRecipe(values);
    setValues({ ...initialStateValues });
  };

  return (
    <div className="flex flex-wrap">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className=" m-2 shadow appearance-none block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="recipeName"
          id="recipeName"
          placeholder="Nombre de la receta"
          onChange={handleInputChange}
          value={values.recipeName}
        />

        <input
          type="text"
          className="m-2 shadow appearance-none block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="category"
          id="category"
          placeholder="Categoria"
          onChange={handleInputChange}
          value={values.category}
        />

        <input
          type="number"
          className="m-2 shadow appearance-none block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
          max="10"
          name="rating"
          id="rating"
          placeholder="Puntaje"
          onChange={handleInputChange}
          value={values.rating}
        />

        <textarea
          className="m-2 resize border rounded focus:outline-none focus:shadow-outline"
          name="method"
          id="method"
          placeholder="Preparacion"
          onChange={handleInputChange}
          value={values.method}
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
