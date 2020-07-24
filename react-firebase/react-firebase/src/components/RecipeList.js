import React, { useEffect, useState } from "react";
import RecipeForm from "./RecipeForm";
import Salty from './img/salty.jpg'
import Sweet from './img/sweet.jpg'
import { db } from "../firebase";

const RecipeList = () => {
  const [list, setList] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addEditRecipe = async (recipe) => {
    //console.log(recipe);

    if (currentId === "") {
      await db.collection("recipeList").doc().set(recipe);
      console.log("Receta Guardada");
    } else {
      await db.collection("recipeList").doc(currentId).update(recipe);
      setCurrentId("");
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
      <RecipeForm {...{ addEditRecipe, currentId, list }} />

      {list.map((list) => (
        <div key={list.id} className="flex flex-wrap max-w-sm rounded-lg overflow-hidden shadow-lg m-5 p-5">
          <img
            className="w-full"
            src={list.category == "Salado" ? Salty : Sweet}
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="text-red-700 font-bold text-xl mb-2">{list.recipeName}</div>
            <p className="text-gray-700 text-base">
              {list.method}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{list.category}
            </span>
          </div>
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
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
