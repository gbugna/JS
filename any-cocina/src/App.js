import React from "react";
import "./App.css";
import firebase from "./firebase";
import Recipe from "./components/Recipe";
//import { useUser } from "./session/hooks";

function App() {
  // const user = useUser();
  const [recipes, setRecipes] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("recetas").get();
      setRecipes(data.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
        <h4 className="text-4xl">Any Cocina</h4>
        {/* Bienvenido: {user.displayName} - {user.email} */}


      {recipes.map((recipes) => (
        <Recipe
          key={recipes.titulo}
          titulo={recipes.titulo}
          categoria={recipes.categoria}
          valoracion={recipes.valoracion}
        
        />
      ))}
    </div>
  );
}

export default App;
