import React, { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm";

import { db } from "../firebase";

const RecipeList = () => {
  const [list, setList] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addEditRecipe = async (recipe) => {
    //console.log(recipe);

    if (currentId === '') {
      
      await db.collection("recipeList").doc().set(recipe);
      console.log("Receta Guardada");
    }else{

      await db.collection("recipeList").doc(currentId).update(recipe);
    }
   
    getRecipeList();
  };

  const deleteRecipe = async (id) => {
    if (window.confirm("¿Seguro desea eliminar esta receta?"))
      await db.collection("recipeList").doc(id).delete();
    getRecipeList();
  };

  const getRecipeList = async () => {
    const querySnapshot = await db.collection("recipeList").get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setList(docs);
    console.log(docs);
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <div>
      <RecipeForm {...{addEditRecipe, currentId, list}} />
      <h1>Recetas</h1>
      {list.map((list) => (
        <li key={list.id}>
          {list.recipeName} {list.category}{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCurrentId(list.id)}
          >
            editar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => deleteRecipe(list.id)}
          >
            eliminar
          </button>
        </li>
      ))}
    </div>
  );
};

export default RecipeList;
