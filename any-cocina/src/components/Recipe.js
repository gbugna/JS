import React from 'react'
import ReactDOM from 'react-dom'

function Recipe(props) {
  
  return ( 
    <div>
  <label>{props.titulo}</label> <label>{props.valoracion}</label> <label>{props.categoria}</label>

  </div>
  );}

  export default Recipe;
