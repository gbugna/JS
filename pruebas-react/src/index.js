import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './components/Formulario';
import * as serviceWorker from './serviceWorker';
import EjemploUno from './components/EjemploUno';

ReactDOM.render(
  <React.StrictMode>
  <Formulario />
  <EjemploUno />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
