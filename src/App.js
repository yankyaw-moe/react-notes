import "./App.scss";
import React from "react";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Names List</h1>
        <NameTag firstName="Thet" lastName="Moe"></NameTag>
        <NameTag firstName="Pan" lastName="Ei"></NameTag>
        <NameTag firstName="Zin" lastName="Moe"></NameTag>

        <input type="text" placeholder="Enter Name"></input>
      </header>
    </div>
  );
}

export default App;
