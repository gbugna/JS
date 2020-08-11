import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import Salty from "./img/salty.jpg";
import Sweet from "./img/sweet.jpg";
import { db } from "../firebase";

const RecipeList = () => {
  const [list, setList] = useState([]);
  const [currentId, setCurrentId] = useState("");

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
    <div className="row">
      {/* <RecipeForm {...{ addEditRecipe, currentId, list }} /> */}

      {list.map((list) => (
        <div key={list.id} className="card">
          <div className="card-image">
            <img
              className="w-full"
              src={list.category == "Salado" ? Salty : Sweet}
              alt="Sunset in the mountains"
            ></img>

            <span className="card-title">{list.recipeName}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          </div>

          <div className="card-content">
            <span>#{list.category}</span>
          </div>
          <Link to={`/recipe-form/${list.id}`}>
            <button className="" onClick={() => setCurrentId(list.id)}>
              editar
            </button>
          </Link>
          <button className="" onClick={() => deleteRecipe(list.id)}>
            eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
