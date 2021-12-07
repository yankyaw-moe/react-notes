/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import "./App.scss";
import React, { useState } from "react";
import NameTag from "./components/nameTag";

function App() {
  const [age, setAge] = useState(26);

  const ageUpHandle = () => {
    setAge(age + 1);
  };

  const ageDownHandle = () => {
    setAge(age - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Age {age}</h2>
        <button onClick={ageUpHandle}>age up</button>
        <button onClick={ageDownHandle}>age down</button>
      </header>
    </div>
  );
}

export default App;
