import React from "react";
import "./App.css";
import "./firebase";
import RecipeList from "./components/RecipeList";
function App() {
  return (
    <>
      <div class="flex">
        <div class="w-1/5 bg-gray-500 h-12"></div>
        <div class="w-3/5 bg-gray-400 h-12">
          <RecipeList />
        </div>
        <div class="w-1/5 bg-gray-500 h-12"></div>
      </div>
    </>
  );
}

export default App;
