import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const RecipeForm = ({ match }) => {
  const initialStateValues = {
    recipeName: "",
    category: "",
    rating: "",
    method: "",
  };

  const [currentId, setCurrentId] = useState(match.params.id);

  const addEditRecipe = async (recipe) => {
    if (currentId === "" || !currentId) {
      await db.collection("recipeList").doc().set(recipe);
      console.log("Receta Guardada");
    } else {
      await db.collection("recipeList").doc(currentId).update(recipe);
      setCurrentId("");
    }
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addEditRecipe(values));
    setValues({ ...initialStateValues });
  };

  const getRecipeById = async (id) => {
    const doc = await db.collection("recipeList").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (currentId === "" || !currentId) {
      setValues({ ...initialStateValues });
    } else {
      getRecipeById(currentId);
    }
  }, [currentId]);

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
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        >
          {match.params.id === "" || !match.params.id ? "Guardar" : "Editar"}
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
