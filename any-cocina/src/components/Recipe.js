import React from "react";
import ReactDOM from "react-dom";

function Recipe(props) {
  return (
    <div className="card black-text">
      <div className="">{props.titulo}</div>
      <div className="">
        <span className="">#{props.categoria}</span>
      </div>
      <td></td> <td>{props.valoracion}</td>
    </div>
  );
}

export default Recipe;
