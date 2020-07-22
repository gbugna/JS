import React, { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm";

import { db } from "../firebase";

const RecipeList = () => {
  const addEditRecipe = async (recipe) => {
    //console.log(recipe);
    await db.collection("recipeList").doc().set(recipe);
    console.log("Receta Guardada");
    getRecipeList();
  };

  const [list, setList] = useState([]);

  const getRecipeList = async () => {
    const querySnapshot = await db.collection("recipeList").get();
    const docs = [];
    querySnapshot.forEach(doc => {
      console.log(doc.data(), doc.id);
      docs.push({...doc.data(), id:doc.id})
      console.log(docs);
    });
    
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <div>
      <RecipeForm addEditRecipe={addEditRecipe} />
      <h1>Recetas</h1>
    </div>
  );
};

export default RecipeList;
