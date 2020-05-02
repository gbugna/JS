import React from "react";
import "./App.css";
import { useUser } from "./session/hooks";

function App() {
  const user = useUser();

  return (
    <div className="App">
      <header className="App">
        <h4>Any Cocina</h4>
        Bienvenido: {user.displayName} - {user.email}
      </header>
    </div>
  );
}

export default App;
