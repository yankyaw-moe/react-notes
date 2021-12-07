/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import "./App.scss";
import React from "react";
import NameTag from "./components/nameTag";

const makeGreen = (BaseComponent) => (props) => {
  console.log("props >> ", props);
  const newProps = {
    style: {
      color: "green",
    },
  };

  const updatedProps = {
    ...props,
    ...newProps,
  };

  return <BaseComponent {...updatedProps} />;
};

const removeInline = (BaseComponent) => (props) => {
  const updateProps = {
    ...props,
  };
  delete updateProps.style;
  return <BaseComponent {...updateProps} />;
};

const MakeGreen = makeGreen(NameTag);
const RemoveInline = removeInline(NameTag);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Names List</h1>
        <MakeGreen firstName="Thet" lastName="Moe"></MakeGreen>
        <RemoveInline
          style={{ color: "red" }}
          firstName="Pan"
          lastName="Ei"
        ></RemoveInline>
        <NameTag
          style={{ color: "blue" }}
          firstName="Zin"
          lastName="Moe"
        ></NameTag>

        <input type="text" placeholder="Enter Name"></input>
      </header>
    </div>
  );
}

export default App;
