/* eslint-disable react/jsx-key */
import React from "react";

function nameTag(props) {
  if (!props.firstName || !props.lastName) {
    return (
      <div className="name">
        <h3>Invalid Name</h3>
      </div>
    );
  }

  return (
    <div className="name">
      <h3 style={props.style}>First Name {props.firstName}</h3>
      <h3 style={props.style}>Last Name {props.lastName}</h3>
      {props.firstName === "Thet" && <div style={{ color: "yellow" }}>VIP</div>}
    </div>
  );
}

export default nameTag;
