import "./App.scss";
import React from "react";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Names List</h1>
        <NameTag>Thet Moe Swe</NameTag>
        <NameTag>Pan Ei Phyu</NameTag>
        <NameTag>Zin Moe Ei</NameTag>
      </header>
    </div>
  );
}

export default App;
