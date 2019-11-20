import React from "react";
import "./App.css";
import "./Components/MainContent";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">Employee CRUD app</header>
      </div>
      <div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
